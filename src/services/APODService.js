import { AppState } from "../AppState";
import { nasaApi } from "./AxiosService"

const apiKey = '&api_key=KGCPO0VaxqlAO94XPlFBfC7YATgWYiIcQcFCaPS1'

class APODService {
  async getApod(date) {
    const res = await nasaApi.get("apod?date=" + date + apiKey)
    console.log("apod.url", res.data.url);
    AppState.apod = res.data
  }
}

export const apodService = new APODService()