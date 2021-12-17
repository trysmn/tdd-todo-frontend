import {useEffect, useState} from "react";
import ApiClient from "../../ApiClient";

const List = () => {
    const [error, setError] = useState(false)
    const [lists, setLists] = useState([])
    const apiClient = new ApiClient()

    useEffect(() => {
        const getAllLists = async () => {
            const response = await apiClient.get_lists()
            if (response instanceof Error) {
                setLists([])
                setError(true)
            } else {
                setError(false)
            }
        }
        getAllLists()
    }, [apiClient])

    return (
        <div>
            <h2>Lists</h2>
            { error ? <h3>Could not fetch lists</h3> : <h3>No lists exist</h3> }
        </div>
    );
}

export default List;