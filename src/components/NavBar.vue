<template>
    <v-app-bar flat app color="var(--v-background-base)" light>
        <v-toolbar-title>DASHBOARD</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-breadcrumbs :items="items" light></v-breadcrumbs>
    </v-app-bar>
</template>

<script>
export default {
    name: "Navbar",
    data: () =>({
        items: [{
            text: "Home",
            disabled: false,
        },{
            text: "Dashboard",
            disabled: true,
        }]
    })
}
</script>