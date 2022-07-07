import axios from 'axios';
import { put } from 'redux-saga/effects';

const objectToString = (object) => Object.keys(object).map(key => object[key]).reduce((pre, curr) => {
    // error information => string: message
    if (['string', 'number', 'boolean'].includes(typeof curr)) return curr + ';\n';
    if (curr[0]) return Array.prototype.join.call(curr, ';\n') + ';\n';
    if (typeof curr === 'object') return objectToString(curr);
    return '';
}, '');

export const requestPostsSagaAPICreator = ({ requestPayload, sucess, fail, items = 4 }) => function* (_items = items) {
    try {
        let payload = {};
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {  // React in devlopment mode
            const { url, params = {}, ...rest } = requestPayload(_items);
            payload = {
                baseURL: 'https://gnews.io/api/v4',
                params: {
                    lan: 'en',
                    max: items,
                    token: process.env.REACT_APP_TOKEN,
                    ...params,
                },
                timeout: 15000,
                url,
                ...rest,
            }
        } else {    // React in production mode
            const { url, params = {}, ...rest } = requestPayload(_items);
            payload = {
                baseURL: document.location.origin,
                params: {
                    lan: 'en',
                    max: items,
                    ...params,
                },
                timeout: 15000,
                url,
                ...rest,
            }
        }
        const { data: { articles } } = yield axios.request(payload);
        const data = articles.map((article) => ({
            image: article.image,
            date: new Date(article.publishedAt).toDateString(),
            description: article.description,
            title: article.title,
            url: article.url,
            content: article.content.slice(0, article.content.lastIndexOf('... [')),
        }));
        yield put(sucess(data));
        return data;
    }
    catch ({ message, response }) {
        // eslint-disable-next-line no-ex-assign
        if (response && response.data) message = objectToString(response.data);
        const error = new Array(_items).fill({ error: message });
        yield put(fail(error));
        return error;
    }
};