import {Headers, Body} from "interfaces/Request";
import {request} from "api/httpRequest";
import settings from "config/server";

export abstract class HttpBase {
 url: string;
 session: number | null;
 debug: boolean = true;
 currentRequests: {[k: string]: any} = {};

 protected constructor(url: string, session: number | null) {
  this.url = `${settings.mainApi}/${url}`;
  this.session = session;
 }

 pagination(page: number, pageSize: number, additionalParams?: number) {
  return this.fetchData("get", `${page}/${pageSize}${additionalParams ? additionalParams : ""}`);
 }

 fullData(id: number) {
  return this.fetchData("get", id.toString());
 }

 list() {
  return this.fetchData("get");
 }

 add(body: {[k: string]: any}) {
  return this.fetchData("post", undefined, body);
 }

 update(id: number, body: {[k: string]: any}) {
  return this.fetchData("put", id.toString(), body);
 }

 delete(id: number) {
  return this.fetchData("delete", id.toString());
 }

 fetchData(method: string, calMethod?: string, body?: Body, header: Headers = {}, excludeHeaders?: string[]) {
  if (this.session) {
   header["X-Cookie"] = `SESSION=${this.session}`;
  }
  const url = calMethod ? `${this.url}/${calMethod}` : this.url;
  return request(method, url, header, body, excludeHeaders, this.debug);
 }
}
