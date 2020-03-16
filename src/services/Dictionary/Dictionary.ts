import moment from "moment";
import {settings} from './settings';

type EN = typeof settings.en;
type EN_TYPE = keyof typeof settings.en;

const locales = {
  en: "en-US"
};

export class DictionaryService {
  data: {[key: string]: string};
  reversed: {[key: string]: string};
  locale: string;
  static keys: EN = settings.en;

  get moment() {
    return moment;
  }

  timeDateString(date?: Date) {
    if(!date) return null;
    return moment(date).format("lll");
  }

  constructor(locale: "en") {
    this.locale = locales[locale];
    this.data = settings[locale];
    moment.updateLocale(locale);

    this.reversed = {};
    let key: EN_TYPE;
    for(key in DictionaryService.keys) {
      this.reversed[DictionaryService.keys[key]] = key;
    }
  }

  defValue(value: string, values?: string | string[]) {
    const key = this.reversed[value];
    return this.value(key, values);
  }

  value(key: string, values?: string | string[]) {
    let data = this.data[key];
    if(values) {
      if(Array.isArray(values)) {
        values.forEach((e, i) => {
          data = data.replace(`%${i}`, e);
        })
      } else {
        data = data.replace('$', values);
      }
    }
    return data ? data : key;
  }

  exists(key: string) {
    return this.data[key] !== undefined;
  }
}

export const Dictionary = new DictionaryService("en");
