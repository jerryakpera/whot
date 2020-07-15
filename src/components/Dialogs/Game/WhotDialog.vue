<template>
    <q-card style="width: 150px">
        <q-card-section>
            <div class="text-h6">Select shape</div>
        </q-card-section>

        <q-card-section class="q-pt-none text-center">
            <q-btn 
                @click="selectShape('square')"    
                style="width: 120px" 
                color="white" 
                text-color="black" 
                label="Square" 
            />
        </q-card-section>

        <q-card-section class="q-pt-none text-center">
            <q-btn 
                @click="selectShape('circle')"    
                style="width: 120px" 
                color="white" 
                text-color="black" 
                label="Circle" 
            />
        </q-card-section>

        <q-card-section class="q-pt-none text-center">
            <q-btn 
                @click="selectShape('cross')"    
                style="width: 120px" 
                color="white" 
                text-color="black" 
                label="Cross" 
            />
        </q-card-section>

        <q-card-section class="q-pt-none text-center">
            <q-btn 
                @click="selectShape('star')"    
                style="width: 120px" 
                color="white" 
                text-color="black" 
                label="Star" 
            />
        </q-card-section>

        <q-card-section class="q-pt-none text-center">
            <q-btn 
                @click="selectShape('triangle')"    
                style="width: 120px" 
                color="white" 
                text-color="black" 
                label="triangle" 
            />
        </q-card-section>
    </q-card>
</template>

<script>
export default {
    methods: {
        selectShape(shape) {
            this.$root.$emit("shapeSelected", shape)
            this.$emit("closeDialog")
        }
    }
}
</script>