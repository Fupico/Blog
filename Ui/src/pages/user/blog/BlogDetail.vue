<template>
  <div class="q-pa-md">
    <q-parallax :height="200" :speed="0.5">
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </template>

      <h1 class="text-white text-bold">Blog Title</h1>
    </q-parallax>
  </div>
  <div class="q-pa-md" style="margin-left: 20px">
    <q-breadcrumbs separator="---" class="text-orange" active-color="secondary">
      <q-breadcrumbs-el icon="home" />
      <q-breadcrumbs-el label="Bloglar" to="/" icon="widgets" />
      <q-breadcrumbs-el label="Blog Detay" icon="navigation" />
    </q-breadcrumbs>
  </div>

  <div class="q-pa-md">
    <div class="row">
      <div class="col-12 col-md-8">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card">
            <img src="https://cdn.quasar.dev/img/mountains.jpg" />

            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              reprehenderit nihil aliquid earum quia fugiat accusantium labore
              aut minus, magni veniam. Rerum saepe quae reprehenderit officia.
              Magni dolor molestiae dolorem tempora illum nemo laborum
              temporibus necessitatibus asperiores? Neque hic odit ex optio
              repudiandae velit excepturi culpa, eos ullam nostrum beatae? Enim
              odit, laudantium ab blanditiis dolorum, optio totam quos obcaecati
              sit labore dolor ut error maiores officiis perferendis, reiciendis
              reprehenderit accusantium odio inventore itaque! Veniam ea enim
              excepturi. Eaque, blanditiis sunt accusantium praesentium
              dignissimos quisquam nesciunt ad aut autem, sed velit facere earum
              dolorem ipsam! Possimus mollitia obcaecati harum nostrum!
            </q-card-section>
            <q-card-section class="q-pt-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              reprehenderit nihil aliquid earum quia fugiat accusantium labore
              aut minus, magni veniam. Rerum saepe quae reprehenderit officia.
              Magni dolor molestiae dolorem tempora illum nemo laborum
              temporibus necessitatibus asperiores? Neque hic odit ex optio
              repudiandae velit excepturi culpa, eos ullam nostrum beatae? Enim
              odit, laudantium ab blanditiis dolorum, optio totam quos obcaecati
              sit labore dolor ut error maiores officiis perferendis, reiciendis
              reprehenderit accusantium odio inventore itaque! Veniam ea enim
              excepturi. Eaque, blanditiis sunt accusantium praesentium
              dignissimos quisquam nesciunt ad aut autem, sed velit facere earum
              dolorem ipsam! Possimus mollitia obcaecati harum nostrum!
            </q-card-section>
            <q-card-section class="q-pt-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              reprehenderit nihil aliquid earum quia fugiat accusantium labore
              aut minus, magni veniam. Rerum saepe quae reprehenderit officia.
              Magni dolor molestiae dolorem tempora illum nemo laborum
              temporibus necessitatibus asperiores? Neque hic odit ex optio
              repudiandae velit excepturi culpa, eos ullam nostrum beatae? Enim
              odit, laudantium ab blanditiis dolorum, optio totam quos obcaecati
              sit labore dolor ut error maiores officiis perferendis, reiciendis
              reprehenderit accusantium odio inventore itaque! Veniam ea enim
              excepturi. Eaque, blanditiis sunt accusantium praesentium
              dignissimos quisquam nesciunt ad aut autem, sed velit facere earum
              dolorem ipsam! Possimus mollitia obcaecati harum nostrum!
            </q-card-section>
          </q-card>
        </div>

        <!-- <div class="q-pa-md" flat bordered >
    Konu Etiketleri:
    <q-btn dense flat style="color: goldenrod;" label="YAZILIM" />
    <q-btn dense flat style="color: goldenrod;" label="VUE" />
    <q-btn dense flat style="color: goldenrod;" label="JAVASCRIPT" />
  </div> -->
        <div class="q-pa-md">
          <q-card class="my-card" flat bordered>
            <q-card-section>
              <div class="text-h6 q-mb-xs q-px-sm">Yorum Yapın</div>
              <div class="row no-wrap items-center q-px-sm">
                <q-rating size="18px" v-model="stars" :max="5" color="orange" />
                <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
              </div>
            </q-card-section>

            <q-card-section>
              <div class="row">
                <div class="col-6 q-px-sm">
                  <q-input filled v-model="text" label="Ad Soyad" dense />
                </div>

                <div class="col-6 q-px-sm">
                  <q-input filled v-model="text" label="E-mail" dense />
                </div>

              </div>
              <div class="row q-py-sm ">
                <div class="col-12 q-px-sm">
                  <q-input
                    v-model="text"
                    filled
                    type="textarea"
                    label="Yorumunuz.."
                  />
                </div>

              </div>
              <div class="row q-px-sm ">
                <div class="col-12" align="right">
                    <q-btn color="secondary" icon-right="send" label="Gönder" />
                </div>

              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="q-pa-md q-gutter-md">
          <q-list bordered class="rounded-borders" >
            <q-item-label header>SON BLOGLAR</q-item-label>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar1.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">Brunch this weekend?</q-item-label>
                <q-item-label caption lines="2">
                  <span class="text-weight-bold">Janet</span>
                  -- I'll be in your neighborhood doing errands this weekend. Do
                  you want to grab brunch?
                </q-item-label>
              </q-item-section>

              <q-item-section side top> 1 min ago </q-item-section>
            </q-item>

            <q-separator inset="item" />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">Linear Project</q-item-label>
                <q-item-label caption lines="2">
                  <span class="text-weight-bold">John</span>
                  -- Can we schedule a call for tomorrow?
                </q-item-label>
              </q-item-section>

              <q-item-section side top> 1 min ago </q-item-section>
            </q-item>
            <q-separator inset="item" />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar3.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">Linear Project</q-item-label>
                <q-item-label caption lines="2">
                  <span class="text-weight-bold">John</span>
                  -- Can we schedule a call for tomorrow?
                </q-item-label>
              </q-item-section>

              <q-item-section side top> 1 min ago </q-item-section>
            </q-item>
            <q-separator inset="item" />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">Linear Project</q-item-label>
                <q-item-label caption lines="2">
                  <span class="text-weight-bold">John</span>
                  -- Can we schedule a call for tomorrow?
                </q-item-label>
              </q-item-section>

              <q-item-section side top> 1 min ago </q-item-section>
            </q-item>
          </q-list>

          <q-list bordered class="rounded-borders" >
            <q-item-label header>GÜNCEL REPOLAR</q-item-label>

            <q-item>
              <q-item-section avatar top>
                <q-icon name="account_tree" color="black" size="34px" />
              </q-item-section>

              <q-item-section top>
                <q-item-label lines="1">
                  <span class="text-weight-medium"
                    >[quasarframework/quasar]</span
                  >
                  <span class="text-grey-8"> - GitHub repository</span>
                </q-item-label>
                <q-item-label caption lines="1">
                  @rstoenescu in #3: > Generic type parameter for props
                </q-item-label>
                <q-item-label
                  lines="1"
                  class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                >
                  <span class="cursor-pointer">Open in GitHub</span>
                </q-item-label>
              </q-item-section>

              <q-item-section top side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn
                    class="gt-xs"
                    size="12px"
                    flat
                    dense
                    round
                    icon="done"
                  />
                  <q-btn size="12px" flat dense round icon="more_vert" />
                </div>
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item>
              <q-item-section avatar top>
                <q-icon name="sms" color="black" size="34px" />
              </q-item-section>

              <q-item-section top>
                <q-item-label lines="1">
                  <span class="text-weight-medium"
                    >[quasarframework/quasar]</span
                  >
                  <span class="text-grey-8"> - GitHub repository</span>
                </q-item-label>
                <q-item-label caption lines="1">
                  @rstoenescu in #1: > The build system
                </q-item-label>
                <q-item-label
                  lines="1"
                  class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                >
                  <span class="cursor-pointer">Open in GitHub</span>
                </q-item-label>
              </q-item-section>

              <q-item-section top side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn
                    class="gt-xs"
                    size="12px"
                    flat
                    dense
                    round
                    icon="done"
                  />
                  <q-btn size="12px" flat dense round icon="more_vert" />
                </div>
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item>
              <q-item-section avatar top>
                <q-icon name="article" color="black" size="34px" />
              </q-item-section>

              <q-item-section top>
                <q-item-label lines="1">
                  <span class="text-weight-medium"
                    >[quasarframework/quasar]</span
                  >
                  <span class="text-grey-8"> - GitHub repository</span>
                </q-item-label>
                <q-item-label caption lines="1">
                  @rstoenescu in #1: > The build system
                </q-item-label>
                <q-item-label
                  lines="1"
                  class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                >
                  <span class="cursor-pointer">Open in GitHub</span>
                </q-item-label>
              </q-item-section>

              <q-item-section top side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn
                    class="gt-xs"
                    size="12px"
                    flat
                    dense
                    round
                    icon="done"
                  />
                  <q-btn size="12px" flat dense round icon="more_vert" />
                </div>
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item>
              <q-item-section avatar top>
                <q-icon name="people" color="black" size="34px" />
              </q-item-section>

              <q-item-section top>
                <q-item-label lines="1">
                  <span class="text-weight-medium"
                    >[quasarframework/quasar]</span
                  >
                  <span class="text-grey-8"> - GitHub repository</span>
                </q-item-label>
                <q-item-label caption lines="1">
                  @rstoenescu in #1: > The build system
                </q-item-label>
                <q-item-label
                  lines="1"
                  class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                >
                  <span class="cursor-pointer">Open in GitHub</span>
                </q-item-label>
              </q-item-section>

              <q-item-section top side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn
                    class="gt-xs"
                    size="12px"
                    flat
                    dense
                    round
                    icon="done"
                  />
                  <q-btn size="12px" flat dense round icon="more_vert" />
                </div>
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item>
              <q-item-section avatar top>
                <q-icon name="event" color="black" size="34px" />
              </q-item-section>

              <q-item-section top>
                <q-item-label lines="1">
                  <span class="text-weight-medium"
                    >[quasarframework/quasar]</span
                  >
                  <span class="text-grey-8"> - GitHub repository</span>
                </q-item-label>
                <q-item-label caption lines="1">
                  @rstoenescu in #1: > The build system
                </q-item-label>
                <q-item-label
                  lines="1"
                  class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                >
                  <span class="cursor-pointer">Open in GitHub</span>
                </q-item-label>
              </q-item-section>

              <q-item-section top side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn
                    class="gt-xs"
                    size="12px"
                    flat
                    dense
                    round
                    icon="done"
                  />
                  <q-btn size="12px" flat dense round icon="more_vert" />
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
