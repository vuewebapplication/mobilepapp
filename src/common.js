import {
    mdiAccountMultipleCheck,
    mdiHomeAccount,
    mdiAccountGroupOutline,
    mdiCheckboxMarkedCirclePlusOutline,
    mdiBallotRecountOutline,
    mdiAccountDetailsOutline,
    mdiEmailOutline,
} from "@mdi/js";
export default {
    data() {
        return {
            currentItem: "tab-Web",
            itemss: ["Web", "Shopping", "Videos", "Images"],
            more: ["News", "Maps", "Books", "Flights", "Apps"],
            drawer: false,
            group: null,
            tabs: null,
            cards: [{
                    title: "Favorite road trips",
                    src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
                    flex: 12,
                },
                {
                    title: "Favorite road trips",
                    src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
                    flex: 6,
                },
                {
                    title: "Best airlines",
                    src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
                    flex: 6,
                },
            ],
            items: [
                { title: "Home", icon: mdiHomeAccount },
                { title: "My Account", icon: mdiAccountDetailsOutline },
                { title: "Users", icon: mdiAccountGroupOutline },
            ],
            icons: {
                mdiAccountMultipleCheck,
                mdiAccountGroupOutline,
                mdiHomeAccount,
                mdiCheckboxMarkedCirclePlusOutline,
                mdiBallotRecountOutline,
                mdiAccountDetailsOutline,
                mdiEmailOutline,
            },
        };
    },
    watch: {
        group() {
            this.drawer = false;
        },
    },

};