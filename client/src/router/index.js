import Router from 'vue-router' // import and allow Router from vue-router install to be (found in client/package.json) to be used

import StateList from '@/components/StateList' // import and allow StateList component to be used

export default new Router({ // this sets the homepage of the app
    routes: [
        {
            path: '/',  // associates path '/' with StateList
            component: StateList
        }
    ]
})