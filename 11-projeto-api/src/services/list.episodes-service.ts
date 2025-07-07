import { PodcastTransferModel } from "../models/filter-podcas-transfer-model";
import { repositoryPodicast } from "../repositories/podcasts-repository";
import { statusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {

    let responseFormat:PodcastTransferModel ={
        statusCode:0,
        body:[],
    };

        
    const data = await repositoryPodicast();

    responseFormat = {
        statusCode: data.length !== 0 ? statusCode.OK : statusCode.NO_CONTENT,
        body:data,
    };

    return responseFormat;
};

