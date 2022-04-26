<template>

    <PageContainer>
        <template v-slot:header>
            <Head></Head>
        </template>
        <template v-slot:default>
            <SummaryBlog :article="item" :index="index" v-for="(item, index) in data.getArticlesWithIntroduce" :key="item.id"></SummaryBlog>
        </template>
        <template v-slot:leftPart>
            <LeftSliderBar></LeftSliderBar>
        </template>
    </PageContainer>
</template>

<script setup lang="ts">
import { useQuery } from "@urql/vue";
import {GetArticlesDocument} from '~/schema/graphql/article'

useHead({
  
  meta: [
    { name: 'referrer', content: 'no-referrer' }
  ],
  
})

const { data } = await useQuery({query:GetArticlesDocument})


</script>

<style  scoped>
</style>