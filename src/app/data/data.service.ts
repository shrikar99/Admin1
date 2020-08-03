import { RequestDataStore } from './data.model';
import { FilterService } from '../filter/filter.service';

export class RequestDataService{
  filterDisabled = false;

    requestData: RequestDataStore[] = [
      {
        requestId: '1234567890',
        requestDepartment: 'IT',
        requestCategory: 'Hardware',
        requestSubCategory: 'Keyboard',
        requestType: 'Issue',
        requestStatus: 'Open',
        requestSummary: 'My keyboard is not working correctly! I request for change or repair my keyboard'
      },
      {
        requestId: '2345678901',
        requestDepartment: 'Finance',
        requestCategory: 'Software',
        requestSubCategory: 'Salary Calculation',
        requestType: 'Issue',
        requestStatus: 'Open',
        requestSummary: 'Salary counting is wrongly implemented here'
      },
      {
        requestId: '3456789012',
        requestDepartment: 'Admin',
        requestCategory: 'Salary Issue',
        requestSubCategory: 'Salary Calculation',
        requestType: 'Issue',
        requestStatus: 'Open',
        requestSummary: 'My keyboard is not working correctly! I request for change or repair my keyboard'
      },
      {
        requestId: '4567890123',
        requestDepartment: 'IT',
        requestCategory: 'Software',
        requestSubCategory: 'Keyboard',
        requestType: 'Issue',
        requestStatus: 'Open',
        requestSummary: 'My keyboard is not working correctly! I request for change or repair my keyboard'
      },
      {
        requestId: '5678901234',
        requestDepartment: 'Finance',
        requestCategory: 'Software',
        requestSubCategory: 'Salary Calculation',
        requestType: 'Issue',
        requestStatus: 'Open',
        requestSummary: 'Salary counting is wrongly implemented here'
      },
      {
        requestId: '6789012345',
        requestDepartment: 'Admin',
        requestCategory: 'Salary Issue',
        requestSubCategory: 'Salary Calculation',
        requestType: 'Issue',
        requestStatus: 'Open',
        requestSummary: 'My keyboard is not working correctly! I request for change or repair my keyboard'
      },
    ];

    requestList: RequestDataStore[] = this.requestData;


    getRequests(){
      return this.requestList;
    }


    getRequest(id: string){
            return this.requestData.find(req => req.requestId === id );
    }

}
