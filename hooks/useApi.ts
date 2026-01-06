"use client";

import { useState } from 'react';
import { useUser } from '../context/UserContext';

interface ApiResponse<T = any> {
    data?: T;
    error?: string;
    loading: boolean;
}

export const useApi = () => {
    const { token, logout } = useUser();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const baseFetch = async (endpoint: string, options: RequestInit = {}) => {
        setLoading(true);
        setError(null);

        // Normalize endpoint - ensure it starts with /
        const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
        const url = `/api/proxy${path}`;

        const headers = new Headers(options.headers);
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        if (!(options.body instanceof FormData)) {
            headers.set('Content-Type', 'application/json');
        }

        try {
            console.log(`API calling: ${url}`);
            const response = await fetch(url, {
                ...options,
                headers,
            });

            // Get the content type to check if it's JSON
            const contentType = response.headers.get("content-type");
            let data: any = null;

            if (contentType && contentType.includes("application/json")) {
                data = await response.json();
            } else {
                // If not JSON, get text for error reporting
                const text = await response.text();
                if (!response.ok) {
                    throw new Error(text || `Server error (${response.status})`);
                }
                data = text; // or handle non-json success if needed
            }
            console.log(`API response from ${url}:`, data);

            if (response.status === 401) {
                logout();
                throw new Error('Session expired');
            }

            if (!response.ok) {
                const errorMessage = data?.message || data?.error || response.statusText;
                throw new Error(errorMessage);
            }

            return data;
        } catch (err: any) {
            const msg = err.message || 'An unexpected error occurred';
            setError(msg);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        get: (url: string) => baseFetch(url, { method: 'GET' }),
        post: (url: string, body: any) => baseFetch(url, {
            method: 'POST',
            body: body instanceof FormData ? body : JSON.stringify(body)
        }),
        put: (url: string, body: any) => baseFetch(url, {
            method: 'PUT',
            body: body instanceof FormData ? body : JSON.stringify(body)
        }),
        patch: (url: string, body: any) => baseFetch(url, {
            method: 'PATCH',
            body: body instanceof FormData ? body : JSON.stringify(body)
        }),
        del: (url: string) => baseFetch(url, { method: 'DELETE' }),
        upload: (url: string, file: File, key: string = 'file') => {
            const formData = new FormData();
            formData.append(key, file);
            return baseFetch(url, { method: 'POST', body: formData });
        }
    };
};
