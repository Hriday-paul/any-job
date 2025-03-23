import { config } from "../../utils/config";


const UseGetTerms = async () => {
    try {
        const response = await fetch(config.serverBaseApi + `/settings/terms`,
            {
                next:
                    { revalidate: 5 }
            });
        if (!response.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
        }
        const res = response.json();
        return res
    } catch (err) {
        console.log(err);
        throw new Error('fetching error')
    }
}

export default UseGetTerms;