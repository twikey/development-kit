/**
 * Post-processing: fixes root endpoint URLs.
 * The converter turns OpenAPI path "/" into a Postman URL object with
 * path: [""], which Postman renders as {{baseUrl}}/ (trailing slash).
 * This script replaces the URL object with a plain string "{{baseUrl}}"
 * for root endpoints, matching how Postman handles URLs without a path.
 */
const fs = require('fs');
const path = require('path');

const collectionPath = path.resolve(__dirname, '../../postman.json');
const collection = JSON.parse(fs.readFileSync(collectionPath, 'utf8'));

function fixRootPaths(items) {
    for (const item of items) {
        if (item.request && item.request.url && typeof item.request.url === 'object') {
            const url = item.request.url;
            const pathSegments = (url.path || []).filter(s => s !== '');
            if (pathSegments.length === 0) {
                item.request.url = '{{baseUrl}}';
            }
        }
        if (item.item) {
            fixRootPaths(item.item);
        }
    }
}

fixRootPaths(collection.item);
fs.writeFileSync(collectionPath, JSON.stringify(collection, null, 4));
