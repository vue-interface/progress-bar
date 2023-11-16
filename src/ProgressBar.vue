<script setup lang="ts">
const props = withDefaults(defineProps<{
    duration?: number | string;
    height?: number | string;
    min?: number;
    max?: number;
    label?: string;
    value?: number | string;
}>(), {
    duration: 500,
    height: 1,
    min: undefined,
    max: undefined,
    label: undefined,
    value: undefined
});

function uom(value: number | string, unit: string) {
    return typeof value === 'number' ? `${value}${unit}` : value;
}
</script>

<template>
    <div
        class="relative h-1 bg-blue-500 transition-[width] ease-linear"
        :style="{
            height: height && uom(height, 'px'),
            width: value && uom(value, '%'),
            transitionDuration: duration && uom(duration, 'ms')
        }">
        <slot name="label">
            <div
                v-if="props.label"
                class="absolute left-1 top-0 flex h-full items-center text-sm text-white">
                {{ props.label }}
            </div>
        </slot>
    </div>
</template>