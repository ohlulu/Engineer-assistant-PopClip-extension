"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = void 0;
const axios = require("axios");

const messageCorrection = async (input, options) => {
    const openai = axios.default.create({
        baseURL: "https://api.openai.com/v1",
        headers: { Authorization: `Bearer ${options.apikey}` },
    });
    const prompt = `你是一名習慣良好的工程師，負責幫我校正 commit message 或 function 命名中的語法、錯字。
    我給你兩個範例你參考一下
    
    1.
    我問: Style: remove unused code of ModelMockable
    你回: Style: remove unused code in ModelMockable
    
    2.
    我問: Feat: remove whitespace and newline
    你回: Feat: remove whitespace and newline

    3.
    我問: func test_feed_endpointUrl
    你回: func test_feed_endpointURL

    4.
    我問: func test_map_throwsErrorOnNo200HTTPRsponse
    你回: func test_map_throwsErrorOnNon200HTTPResponse
    `;
    const { data } = await openai.post("chat/completions", {
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: prompt },
            { role: "user", content: input.text }
        ],
    });
    const response = data.choices[0].message.content.trim();

    popclip.pasteText(response);

    return null;
};

exports.actions = [{
    title: "ChatGPT: git commit -m correction",
    code: messageCorrection,
}];