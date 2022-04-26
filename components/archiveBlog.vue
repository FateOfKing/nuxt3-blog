<template>
    <div class="w-full">
        <nuxt-link
            :to="'/detail/'+item.id"
            class="leading-10 h-10 text-base w-full hover:text-[#3273dc] hover:bg-[#f0f0f0] inline-block px-4"
            :class="[index % 2 ? 'bg-[#f6f7f8]' : 'bg-white']"
        >
            <span class="w-10 text-gray-400 inline-block">{{ index + 1 }}.</span>
            <span class="w-[43.75rem] text-black inline-block">{{item.title}}</span>
            <span class="text-gray-400 inline-block">{{convertTime(item.addTime)}}</span>
        </nuxt-link>
    </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { ArticleDto } from "~~/schema/generated/graphql";
import { convertUnixTimeToDate } from "~~/utils/utils";


const props = defineProps({
    index: Number,
    item:Object as PropType<Pick<ArticleDto, "title" | "id" | "introduce" | "addTime" | "view_content" | "type_id">>,
});
const { index,item } = toRefs(props);
const convertTime = (time:number)=>{
    
const formattedTime =convertUnixTimeToDate(time)

return formattedTime;
}
</script>

<style scoped>
</style>