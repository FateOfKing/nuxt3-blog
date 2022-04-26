<template>
    <div class="w-[50rem] rounded-md p-8 bg-white my-5">
        <div class="font-bold text-lg text-black mb-2 hover:text-blue-600">
            <nuxt-link :to="'/detail/'+props.article.id">{{props.article.title}}</nuxt-link>
        </div>
        <div class="flex columns-2 text-gray-400 text-sm leading-8 h-8">
            <div class="w-full">{{convertTime(props.article.addTime)}}</div>
            <!-- <div class="w-full">1000</div> -->
        </div>
        
        <div
            class="text-gray-700"
            v-html="html"
        >
        </div>
    </div>
</template>

<script setup lang="ts">
import {ArticleDto} from '~/schema/generated/graphql'
import {PropType} from 'vue'
import { marked } from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import { convertUnixTimeToDate } from '~~/utils/utils';
const props = defineProps({
    article: {
        type: Object as PropType<Pick<ArticleDto, "title" | "id" | "introduce" | "addTime" | "view_content">>,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
})
const html = ref('');
const renderer = new marked.Renderer();
    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        breaks: true,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });
html.value = marked(props.article.introduce);

const convertTime = (time:number)=>{
    
const formattedTime =convertUnixTimeToDate(time)

return formattedTime;
}
</script>

<style scoped>


</style>