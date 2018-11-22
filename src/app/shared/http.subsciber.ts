/**
 * THIS CLASS SUBSCRIBE OBSERVABLE	
 */
import { Observable } from 'rxjs/Observable';

export class HttpSubscriber {
	
	public subscribe(httpObserable: Observable<any>, onSuccess: (data: any) => any, onFailure: (error: any) => any) {
		  let response: any;
		  httpObserable.subscribe(
		      (res: any) => {
			        response = res;
		      },
		      (error: any) => {
			        onFailure(error);
		      },
		      () => {
			        onSuccess(response);
		      });
	  }
}
