const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api/v1';

export async function fetchAPI(endpoint: string) {
    try {
        const res = await fetch(`${API_BASE_URL}${endpoint}`, {
            cache: 'no-store',
        });
        
        if (!res.ok) {
            // Return empty/default data instead of throwing to prevent page crash
            console.error(`Failed to fetch ${endpoint}: ${res.statusText}`);
            return [];
        }
        
        return res.json();
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        return []; // Return empty array as fallback
    }
}
