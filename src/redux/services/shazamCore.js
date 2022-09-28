import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key','c8580bd8c7mshc28c11587ed6c53p11b27cjsn703f59de2d32');

            return headers;
        },
    }),
    endpoints:(builders)=>({
        getTopCharts: builders.query({query:()=>'/charts/world'}),
    })
})

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;