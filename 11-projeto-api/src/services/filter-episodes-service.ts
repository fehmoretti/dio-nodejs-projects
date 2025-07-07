import { repositoryPodicast } from "../repositories/podcasts-repository"
import { PodcastTransferModel } from "../models/filter-podcas-transfer-model";
import { statusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podecastName: string | undefined
    
): Promise<PodcastTransferModel> =>{

    //define a interface de retorno
    let responseFormat:PodcastTransferModel ={
        statusCode:0,
        body:[],
    };


    //buscando os dados
    const queryString = podecastName?.split("?p=")[1] || "";

    const data = await repositoryPodicast(queryString);

    //verifico o conteudo

    responseFormat = {
            statusCode: data.length !== 0 ? statusCode.OK : statusCode.NO_CONTENT,
            body:data,
    };

    //verificar o conteudo
    return responseFormat;
}


