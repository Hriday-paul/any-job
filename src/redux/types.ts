export type userResType =
    {
        "id": string,
        "fullname": string,
        "firstName": string,
        "lastName": string | null,
        "experience": string | null,
        "address": string | null,
        "email": string,
        "role": "CONTACTOR",
        "profilePicture": string,
        "createdAt": "2025-03-10T14:24:27.889Z",
        "updatedAt": "2025-03-10T15:49:23.741Z",
        "isActive": boolean,
        "subscriptions": [],
        "bio": string | null,
        "availability": string | null,
        "city": string | null,
        "country": string | null,
        "emailNotification": boolean,
        "location": string | null,
        "minPricing": number | null,
        "maxPricing": number | null,
        stripeAccountId?: string,
        serviceAreas: string[],
        "myServices": {
            "id": string,
            "userId": string,
            "serviceId": string,
            "createdAt": string,
            "updatedAt": string,
            "service": {
                "id": string,
                "name": string,
                "image": string | null,
                "createdAt": string,
                "updatedAt": string
            }
        }[],
        "phoneNumber": string | null,
        "rating": number,
        "reviewCount": number,
        "whyChooseMe": string | null,
        "workPhotos": [],
        "locationPaths": {
            "id": string,
            "paths": {
                "latitude": number,
                "longitude": number
            }[][],
            "userId": string,
            "createdAt": string,
            "updatedAt": string
        }[],

        reviews: reviewsType[]
    }

export type reviewsType = {
    "id": string,
    "userId": string,
    "reviewerId": number,
    "rating": number,
    "comment": string,
    "status": "PENDING",
    "createdAt": string,
    "updatedAt": string,
    "name": "Charity Chan",
    "email": "fowujydifu@mailinator.com",

}

export type packageType = {
    "id": string,
    "name": string,
    "description": string,
    "interval": string,
    "price": number,
    "stripePriceId": null,
    "createdAt": string,
    "updatedAt": string
}

export type servicesType = {
    "id": string,
    "name": string,
    description: string,
    "image": string,
    "createdAt": string,
    "updatedAt": string
}

export type jobType = {
    "id": string,
    "title": string,
    "description": string,
    "location": {
        "type": "Point",
        "coordinates": [
            number,
            number
        ]
    },
    "country": null | string,
    "city": null | string,
    "dates": [
        "on"
    ],
    address: string,
    service: string,
    "time": null | string,
    "preferredJobDate": string,
    "budget": string,
    "jobAdditionalDetails": {
        "id": string,
        "jobId": string,
        "url": string,
        "key": string,
        "createdAt": string,
        "updatedAt": string
    }[],
    "specialInstructions": string,
    "firstName": string,
    "lastName": string,
    "fullName": string,
    "email": string,
    "phoneNumber": null | string,
    "userId": string,
    "createdAt": string,
    "updatedAt": string,
    "distance": string,
    state: string,
    zipCode : string | null
}

export type myjobsType = {
    "id": string,
    "userId": string,
    "jobId": string,
    "price": number,
    "scheduleDateTime": string,
    "availability": string,
    "message": string,
    "completeDate": string | null,
    "status": "APPROVED" | "PENDING",
    isComplete : boolean,
    "paymentStatus": "PAID"|"UNPAID",
    "createdAt": string,
    "updatedAt": string,
    "job": jobType,
    "user": {
        "firstName": string,
        "lastName": string,
        "profilePicture": string,
        "rating": number,
        "reviewCount": number
    }
}

export type currentSubscriptionType = {
    "id": string,
    "userId": string,
    "packageId": string,
    "quoteId": null,
    "transactionId": string,
    "stripeSubscriptionId": null,
    "autoRenewal": boolean,
    "renewalDate": string,
    "lastRenewalDate": string,
    "renewalCount": 0,
    "status": "ACTIVE",
    "createdAt": string,
    "updatedAt": string,
    "package": {
        "id": string,
        "name": string,
        "description": string,
        "interval": "month",
        "price": 10,
        "stripePriceId": null,
        "createdAt": "2025-03-11T11:03:49.411Z",
        "updatedAt": "2025-03-11T11:03:49.411Z"
    }
}