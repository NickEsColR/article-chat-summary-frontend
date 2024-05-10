import { useDispatch, useSelector } from "react-redux";
import { setActiveArticle } from "../store";


export const useArticleStore = () => {
  const dispatch = useDispatch();
  const {activeArticle} = useSelector((state) => state.article);

    /**
     * Function to set the selected article as active
     * @param {object} article - The article to set as active
     */
    const onSetActiveArticle = (article) => {
        dispatch(setActiveArticle)
    }

    return {
        //properties
        activeArticle,

        //methods
        onSetActiveArticle
    }
}
