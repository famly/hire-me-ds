import {useCallback, useEffect, useState} from 'react';

import {checkIn, checkOut, fetchChildren} from './client';
import type {Child} from './types';

export function useChildren() {
    const [children, setChildren] = useState<Child[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const refresh = useCallback(async () => {
        setLoading(true);
        try {
            setChildren(await fetchChildren());
            setError(null);
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Something went wrong');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void refresh();
    }, [refresh]);

    const runAndRefresh = useCallback(
        async (action: () => Promise<void>) => {
            try {
                await action();
                await refresh();
            } catch (e) {
                setError(e instanceof Error ? e.message : 'Something went wrong');
                throw e;
            }
        },
        [refresh],
    );

    return {
        children,
        loading,
        error,
        clearError: () => setError(null),
        refresh,
        checkIn: (childId: string, pickupTime: string) => runAndRefresh(() => checkIn(childId, pickupTime)),
        checkOut: (childId: string) => runAndRefresh(() => checkOut(childId)),
    };
}
