/**
* 这个文件由 scripts/sync-api.ts 自动生成。
* 请勿手动编辑。请运行 `npm run sync-api` 重新生成。
*
* 生成来源: https://yokongzhao--chatterbox-tts-chatterbox-serve.modal.run/openapi.json
* 生成时间: 2026-03-06T07:22:40.240Z
*/
  export interface paths {
    "/generate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generate Speech
         * @description 生成语音的 HTTP 接口。
         */
        post: operations["generate_speech_generate_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** HTTPValidationError */
        HTTPValidationError: {
            /** Detail */
            detail?: components["schemas"]["ValidationError"][];
        };
        /**
         * TTSRequest
         * @description 文本转语音生成的请求模型。
         */
        TTSRequest: {
            /**
             * Prompt
             * @description 要生成的文本内容
             */
            prompt: string;
            /**
             * Voice Key
             * @description R2 存储桶中的语音样本路径
             */
            voice_key: string;
            /**
             * Temperature
             * @description 采样温度，越高随机性越大
             * @default 0.8
             */
            temperature: number;
            /**
             * Top P
             * @description 核采样阈值
             * @default 0.95
             */
            top_p: number;
            /**
             * Top K
             * @description 前 K 个候选词
             * @default 1000
             */
            top_k: number;
            /**
             * Repetition Penalty
             * @description 重复惩罚系数
             * @default 1.2
             */
            repetition_penalty: number;
            /**
             * Norm Loudness
             * @description 是否进行响度归一化
             * @default true
             */
            norm_loudness: boolean;
        };
        /** ValidationError */
        ValidationError: {
            /** Location */
            loc: (string | number)[];
            /** Message */
            msg: string;
            /** Error Type */
            type: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    generate_speech_generate_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TTSRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                    "audio/wav": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
}
