<template>
    <PageContainer>
        <template v-slot:header>
            <Head></Head>
        </template>
        <template v-slot:default>
            <div class="mt-5 bg-white rounded border-[#86909c]">
                <ArchiveBlog :item="item" v-for="(item, index) in data?.getArticles??[]" :index="index" :key="item.id"></ArchiveBlog>
            </div>
        </template>
        <template v-slot:leftPart>
            <LeftSliderBar></LeftSliderBar>
        </template>
    </PageContainer>
</template>

<script setup lang="ts">
import { useQuery } from "@urql/vue";
import {GetArticlesDocument} from '~/schema/graphql/article'

const {data} = useQuery({query:GetArticlesDocument})

</script>

<style scoped>
</style>