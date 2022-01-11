import { useEffect } from "react";

const useDocumentTitle = title => {
    // const [document_title, setDoucmentTitle] = useState(title);
    useEffect(() => {
        // document.title = document_title;
        document.title = title;
    }, [title]);

    // return [document_title, setDoucmentTitle];
};

export { useDocumentTitle };