import { useDispatch, useSelector } from "react-redux";
import { deleteArticle, setActiveArticle } from "../store";


export const useArticleStore = () => {
  const dispatch = useDispatch();
  const {activeArticle, articles} = useSelector((state) => state.article);

    /**
     * Function to set the selected article as active
     * @param {object} article - The article to set as active
     */
    const onSetActiveArticle = (article) => {
        dispatch(setActiveArticle)
    }

    const onDeleteArticle = (id) => {
        dispatch(deleteArticle(id))
    }

    return {
        //properties
        activeArticle,
        articles,

        //methods
        onSetActiveArticle,
        onDeleteArticle
    }
}
