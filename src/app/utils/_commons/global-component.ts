import { environment } from "src/environments/environment";

export class GlobalComponent{
    public static base_url : string = environment.base_url;
    public static security_question_url : string = this.base_url + "/security-question";
    public static country_url :string = this.base_url + "/country";
}