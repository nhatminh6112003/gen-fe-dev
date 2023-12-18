import { MetaData } from "@/types";
import { useEffect, useState } from "react";


const useMetadata = (currentPath: string) => {
    const [metaData, setMetadata] = useState<MetaData>();

    useEffect(() => {

    }, [metaData])
}

export default useMetadata;