<script setup lang="ts">
const props = withDefaults(defineProps<{
    duration?: number | string;
    height: number | string;
    min?: number;
    max?: number;
    label?: string;
    value?: number | string;
}>(), {
    duration: 500
});

function uom(value: number | string, unit: string) {
    return typeof value === 'number' ? `${value}${unit}` : value;
}
</script>

<template>
    <div class="relative bg-blue-500 h-1 transition-[width]" :style="{
        height: height && uom(height, 'px'),
        width: value && uom(value, '%'),
        transitionDuration: duration && uom(duration, 'ms')
    }">
        <slot name="label">
            <div v-if="props.label" class="absolute top-0 left-1 h-full flex items-center text-white text-sm">
                {{ props.label }}
            </div>
        </slot>
    </div>
</template>