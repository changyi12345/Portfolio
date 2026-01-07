export async function fetchAPI(endpoint: string) {
    const res = await fetch(`http://localhost:5000/api/v1${endpoint}`, {
        cache: 'no-store', // Ensure fresh data
    });
    
    if (!res.ok) {
        throw new Error(`Failed to fetch data from ${endpoint}`);
    }
    
    return res.json();
}
