<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="info">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#">
                    <router-link :to="{name: 'productList'}">VUE MERCHANDISE</router-link>
            </b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="md" class="mr-sm-2" type="text" placeholder="Search"/>
                        <b-button size="md" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>

</template>

<script>
    export default {
        name: 'navbar',
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',

            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters.isLoggedIn;
            }
        }
    }
</script>

<style scoped>
    .topnavmenu {
        color: #0074D9;
    }

    a {
        display-style: none;
        color: white;
        font-color: white;

    }

</style>