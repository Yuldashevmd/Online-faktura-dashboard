import GenericPage from "../page/GenericPage";
import { ReactComponent as PlusIcon } from "../assets/svg/plus.svg";
import { ReactComponent as ArrowDown } from "../assets/svg/arrowbtm.svg";
import { ReactComponent as ArrowUp } from "../assets/svg/arrowtop.svg";
import { ReactComponent as SaveIcon } from "../assets/svg/save.svg";
import { ReactComponent as DeleteIcon } from "../assets/svg/delete.svg";
import DocumentCreatePage from "../page/DocumentCreatePage";
import DocumentPage from "../page/DocumentPage";
export const MainRoute = [{
        id: 1,
        title: "Создать",
        path: "/document-create",
        element: < DocumentCreatePage / > ,
        icon: < PlusIcon / > ,
    },
    {
        id: 2,
        title: "Входящие",
        path: "/document",
        element: < DocumentPage / > ,
        icon: < ArrowDown / > ,
    },
    {
        id: 3,
        title: "Исходящие (3)",
        path: "/send",
        element: < GenericPage / > ,
        icon: < ArrowUp / > ,
    },
    {
        id: 4,
        title: "Сохраненные (0)",
        path: "/saved",
        element: < GenericPage / > ,
        icon: < SaveIcon / > ,
    },
    {
        id: 5,
        title: "Сохраненные (0)",
        path: "/archived",
        element: < GenericPage / > ,
        icon: < DeleteIcon / > ,
    },
];