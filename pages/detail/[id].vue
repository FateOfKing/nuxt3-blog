<template>
    <div class="bg-gray-page-bg-color h-screen">

        <Head></Head>
        <div class="container h-full mx-auto main clear-fix px-10">
            <div class="center bg-white mt-5 p-5">
                <div>
                    <div class="text-black text-xl font-bold text-center">{{ data?.getArticle.title }}</div>
                    <div class="text-sm text-gray-400 text-center mt-3">{{ converTime(data?.getArticle.addTime) }}</div>
                    <div v-html="html"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { marked } from 'marked'
import hljs from "highlight.js";
import { useQuery } from '@urql/vue'
import { GetArticleDocument } from '~/schema/graphql/article'
import { convertUnixTimeToDate } from '~~/utils/utils';
const route = useRoute();

const { data } = useQuery({ query: GetArticleDocument, variables: { id: parseInt((route.params.id as string)) } })
const converTime = (time: number) => {
    return convertUnixTimeToDate(time)
}
const renderer = new marked.Renderer();
marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    }
});
const html = computed(() => {
    return marked(data.value?.getArticle.article_content??'' )
})




// })

</script>

<style scoped>
pre{
    display: block;
    background-color:#f3f3f3;
     padding: .5rem !important;
     overflow-y: auto;
     font-weight: 300;
     font-family: Menlo, monospace;
     border-radius: .3rem;
}
pre{
    background-color: #283646 !important;
}
pre >code{
    border:0px !important;
    background-color: #283646 !important;
    color:#FFF;

}
code {
    display: inline-block ;
    background-color:#f3f3f3;
    border:1px solid #fdb9cc;
    border-radius:3px;
    font-size: 12px;
    padding-left: 5px;
    padding-right: 5px;
    color:#4f4f4f;
    margin: 0px 3px;

}
</style>