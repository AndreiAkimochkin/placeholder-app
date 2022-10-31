export type PostType = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}

export type PostArrayType ={
    all_posts:PostType[],
    isLoading: boolean,
    error: boolean,
}


export type UsersType = {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": UsersAddressType
    "phone": string,
    "website": string,
    "company": UsersCompanyType
}

export type UsersArrayType ={
    all_users:UsersType[],
}

export type UsersAddressType = {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
        "lat": string,
        "lng": string
    }
}

export type UsersCompanyType = {
    "name": string,
    "catchPhrase": string,
    "bs": string
}