<template>
    
    <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>

</template>

<script setup>
// import { ref } from 'vue'

// const menuList = [
//   {
//     icon: 'inbox',
//     label: 'Inbox',
//     separator: true
//   },
//   {
//     icon: 'send',
//     label: 'Outbox',
//     separator: false
//   },
//   {
//     icon: 'delete',
//     label: 'Trash',
//     separator: false
//   },
//   {
//     icon: 'error',
//     label: 'Spam',
//     separator: true
//   },
//   {
//     icon: 'settings',
//     label: 'Settings',
//     separator: false
//   },
//   {
//     icon: 'feedback',
//     label: 'Send Feedback',
//     separator: false
//   },
//   {
//     icon: 'help',
//     iconColor: 'primary',
//     label: 'Help',
//     separator: false
//   }
// ]




</script>