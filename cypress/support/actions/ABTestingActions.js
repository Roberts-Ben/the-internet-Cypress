import { visit, getCurrentURL, getText } from "./BaseActions";

export function getHeaderText() 
{
    return getText("h3");
}