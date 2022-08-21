import { initialPageLoad } from "./page_load";
import {
    appendContentElement,
    appendHomeContent,
    appendMenuContent
} from "./content";
import './style.css'

initialPageLoad();
appendContentElement();
//appendHomeContent();
appendMenuContent();