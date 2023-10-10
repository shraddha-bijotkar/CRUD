export interface contactModel {
    companyBasicId: number;
  isDefaultBranchLocation: boolean;
  companyId: string;
  accountTypeId: number;
  isEnableProductUpload: boolean;
  contactType: string;
  company: string;
  loginName: string;
  name: string;
  password: string;
  emailId: string;
  mobile: string;
  identityType: string;
  identityNumber: string;
  uploadIdentity: string;
  professionalSkills: string;
  subscriptionId: number;
  stores: Store[];
  isPrimaryAddress: boolean;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  contactCompany: string;
  mid: string;
}

export interface Store {
  Text: string;
}

export const dummyContact = {
    "companyBasicId": 91,
    "isDefaultBranchLocation":true,
    "companyId": "DEF56C4F-808D-4F81-993C-EF67C77A5F91",
    "accountTypeId": 2,
    "isEnableProductUpload": false,
    "contactType": "Customer",
    "company": "JBS991",
    "loginName": "9721",
    "name": "User9721",
    "password": "123456782",
    "emailId": "9721@gs.com",
    "mobile": "99399379721",
    "identityType": "Pancard",
    "identityNumber": "99KSHSK0991",
    "uploadIdentity": "Pan//Image path991",
    "professionalSkills": "tech991",
    "subscriptionId": 1,
    "stores": [
        {
            "Text": "10 ecommerce store 9721"
        },
                {
            "Text": "10 ecommerce store 9721"
        }
    ],
    "isPrimaryAddress": false,
    "address": "Jublihills1",
    "city": "HYDERABAD",
    "state": "TELANGANA",
    "zipCode": "50003",
    "country": "india",
    "contactCompany": "JBS991",
    "mid":"MIN#00"
}


export const dummyGetAllContacts: contactModel[] = [
    {
        "companyBasicId": 91,
        "isDefaultBranchLocation":true,
        "companyId": "DEF56C4F-808D-4F81-993C-EF67C77A5F91",
        "accountTypeId": 2,
        "isEnableProductUpload": false,
        "contactType": "Customer",
        "company": "JBS991",
        "loginName": "abcd",
        "name": "abcd",
        "password": "abcdabcd",
        "emailId": "abcd@gmail.com",
        "mobile": "9595959595",
        "identityType": "Pancard",
        "identityNumber": "99KSHSK0991",
        "uploadIdentity": "Pan//Image path991",
        "professionalSkills": "tech991",
        "subscriptionId": 1,
        "stores": [
            {
                "Text": "09 ecommerce store 9721"
            },
                    {
                "Text": "09 ecommerce store 9721"
            }
        ],
        "isPrimaryAddress": false,
        "address": "Jublihills1",
        "city": "HYDERABAD",
        "state": "TELANGANA",
        "zipCode": "50003",
        "country": "india",
        "contactCompany": "JBS991",
        "mid":"MIN#00"
    },
    {
        "companyBasicId": 92,
        "isDefaultBranchLocation":true,
        "companyId": "DEF56C4F-808D-4F81-993C-EF67C77A5F91",
        "accountTypeId": 2,
        "isEnableProductUpload": false,
        "contactType": "Customer",
        "company": "JBS991",
        "loginName": "9721",
        "name": "User9721",
        "password": "123456782",
        "emailId": "9721@gs.com",
        "mobile": "99399379721",
        "identityType": "Pancard",
        "identityNumber": "99KSHSK0991",
        "uploadIdentity": "Pan//Image path991",
        "professionalSkills": "tech991",
        "subscriptionId": 1,
        "stores": [
            {
                "Text": "09 ecommerce store 9721"
            },
                    {
                "Text": "09 ecommerce store 9721"
            }
        ],
        "isPrimaryAddress": false,
        "address": "Jublihills1",
        "city": "HYDERABAD",
        "state": "TELANGANA",
        "zipCode": "50003",
        "country": "india",
        "contactCompany": "JBS991",
        "mid":"MIN#00"
    },
    {
        "companyBasicId": 93,
        "isDefaultBranchLocation":true,
        "companyId": "DEF56C4F-808D-4F81-993C-EF67C77A5F91",
        "accountTypeId": 2,
        "isEnableProductUpload": false,
        "contactType": "Customer",
        "company": "JBS991",
        "loginName": "9721",
        "name": "User9721",
        "password": "123456782",
        "emailId": "9721@gs.com",
        "mobile": "99399379721",
        "identityType": "Pancard",
        "identityNumber": "99KSHSK0991",
        "uploadIdentity": "Pan//Image path991",
        "professionalSkills": "tech991",
        "subscriptionId": 1,
        "stores": [
            {
                "Text": "09 ecommerce store 9721"
            },
                    {
                "Text": "09 ecommerce store 9721"
            }
        ],
        "isPrimaryAddress": false,
        "address": "Jublihills1",
        "city": "HYDERABAD",
        "state": "TELANGANA",
        "zipCode": "50003",
        "country": "india",
        "contactCompany": "JBS991",
        "mid":"MIN#00"
    },
    {
        "companyBasicId": 94,
        "isDefaultBranchLocation":true,
        "companyId": "DEF56C4F-808D-4F81-993C-EF67C77A5F91",
        "accountTypeId": 2,
        "isEnableProductUpload": false,
        "contactType": "Customer",
        "company": "JBS991",
        "loginName": "abcd",
        "name": "abcd",
        "password": "abcdabcd",
        "emailId": "abcd@gmail.com",
        "mobile": "9595959595",
        "identityType": "Pancard",
        "identityNumber": "99KSHSK0991",
        "uploadIdentity": "Pan//Image path991",
        "professionalSkills": "tech991",
        "subscriptionId": 1,
        "stores": [
            {
                "Text": "09 ecommerce store 9721"
            },
                    {
                "Text": "09 ecommerce store 9721"
            }
        ],
        "isPrimaryAddress": false,
        "address": "Jublihills1",
        "city": "HYDERABAD",
        "state": "TELANGANA",
        "zipCode": "50003",
        "country": "india",
        "contactCompany": "JBS991",
        "mid":"MIN#00"
    },
    
    
    
]