//typings for @deck.gl/aggregation-layers v8.1.3
declare module '@deck.gl/aggregation-layers/utils/prop-utils' {
	export function filterProps(props: any, filterKeys: any): {};

}
declare module '@deck.gl/aggregation-layers/aggregation-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	import { CompositeLayerProps } from '@deck.gl/core/lib/composite-layer';
	export type Aggregation = 'SUM' | 'MEAN' | 'MIN' | 'MAX';
	export interface AggregationLayerProps<D> extends CompositeLayerProps<D> {

	}
	export default class AggregationLayer<D> extends CompositeLayer<D> {
		initializeState(dimensions: any): void;
		updateState(opts: any): void;
		updateAttributes(changedAttributes: any): void;
		getAttributes(): any;
		getModuleSettings(): any;
		updateShaders(shaders: any): void;
	    /**
	     * Checks if aggregation is dirty
	     * @param {Object} updateOpts - object {props, oldProps, changeFlags}
	     * @param {Object} params - object {dimension, compareAll}
	     * @param {Object} params.dimension - {props, accessors} array of props and/or accessors
	     * @param {Boolean} params.compareAll - when `true` it will include non layer props for comparision
	     * @returns {Boolean} - returns true if dimensions' prop or accessor is changed
	     **/
		isAggregationDirty(updateOpts: any, params?: {}): any;
	    /**
	     * Checks if an attribute is changed
	     * @param {String} name - name of the attribute
	     * @returns {Boolean} - `true` if attribute `name` is changed, `false` otherwise,
	     *                       If `name` is not passed or `undefiend`, `true` if any attribute is changed, `false` otherwise
	     **/
		isAttributeChanged(name: any): boolean;
		_getAttributeManager(): any;
	}

}
declare module '@deck.gl/aggregation-layers/utils/aggregation-operation-utils' {
	export const AGGREGATION_OPERATION: {
		SUM: number;
		MEAN: number;
		MIN: number;
		MAX: number;
	};
	export function getMean(pts: any, accessor: any): number;
	export function getSum(pts: any, accessor: any): any;
	export function getMax(pts: any, accessor: any): any;
	export function getMin(pts: any, accessor: any): any;
	export function getValueFunc(aggregation: any, accessor: any): (pts: any) => any;

}
declare module '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/gpu-grid-aggregator-constants' {
	export const DEFAULT_RUN_PARAMS: {
		projectPoints: boolean;
		viewport: any;
		createBufferObjects: boolean;
		moduleSettings: {};
	};
	export const MAX_32_BIT_FLOAT = 3.402823466e+38;
	export const MIN_BLEND_EQUATION: any[];
	export const MAX_BLEND_EQUATION: any[];
	export const MAX_MIN_BLEND_EQUATION: any[];
	export const EQUATION_MAP: {
		[x: number]: any;
	};
	export const ELEMENTCOUNT = 4;
	export const DEFAULT_WEIGHT_PARAMS: {
		size: number;
		operation: number;
		needMin: boolean;
		needMax: boolean;
		combineMaxMin: boolean;
	};
	export const PIXEL_SIZE = 4;
	export const WEIGHT_SIZE = 3;
	export const MAX_MIN_TEXTURE_OPTS: {
		format: any;
		type: any;
		border: number;
		mipmaps: boolean;
		parameters: {
			[x: number]: any;
		};
		dataFormat: any;
		width: number;
		height: number;
	};

}
declare module '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/aggregate-to-grid-vs.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/aggregate-to-grid-fs.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/aggregate-all-vs.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/aggregate-all-fs.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/transform-mean-vs.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/utils/resource-utils' {
	export function getFloatTexture(gl: any, opts?: {}): any;
	export function getFramebuffer(gl: any, opts: any): any;
	export function getFloatArray(array: any, size: any, fillValue?: number): any;

}
declare module '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/gpu-grid-aggregator' {
	export default class GPUGridAggregator {
		static getAggregationData({ aggregationData, maxData, minData, maxMinData, pixelIndex }: {
			aggregationData: any;
			maxData: any;
			minData: any;
			maxMinData: any;
			pixelIndex: any;
		}): {};
		static getCellData({ countsData, size }: {
			countsData: any;
			size?: number;
		}): {
			cellCounts: Uint32Array;
			cellWeights: Float32Array;
		};
		static isSupported(gl: any): any;
		constructor(gl: any, opts?: {});
		delete(): void;
		run(opts?: {}): {};
		getData(weightId: any): {};
		updateShaders(shaderOptions?: {}): void;
		_normalizeAggregationParams(opts: any): any;
		setState(updateObject: any): void;
		_getAggregateData(opts: any): {};
		_renderAggregateData(opts: any): void;
		_renderToMaxMinTexture(opts: any): void;
		_renderToWeightsTexture(opts: any): void;
		_runAggregation(opts: any): {};
		_setupFramebuffers(opts: any): void;
		_getMinMaxTexture(name: any): any;
		_setupModels({ numCol, numRow }?: {
			numCol?: number;
			numRow?: number;
		}): void;
		_setupWeightAttributes(opts: any): void;
		_trackGPUResultBuffers(results: any, weights: any): void;
		_updateModels(opts: any): void;
	}

}
declare module '@deck.gl/aggregation-layers/utils/scale-utils' {
	export function getScale(domain: any, range: any, scaleFunction: any): any;
	export function getQuantizeScale(domain: any, range: any): any;
	export function getLinearScale(domain: any, range: any): any;
	export function getQuantileScale(domain: any, range: any): any;
	export function getOrdinalScale(domain: any, range: any): any;
	export function quantizeScale(domain: any, range: any, value: any): any;
	export function linearScale(domain: any, range: any, value: any): any;
	export function unique(values: any): any[];
	export function getLinearDomain(data: any, valueAccessor: any): any[];
	export function getQuantileDomain(data: any, valueAccessor: any): any;
	export function getOrdinalDomain(data: any, valueAccessor: any): any[];
	export function getScaleDomain(scaleType: any, data: any, valueAccessor: any): any;
	export function clamp(value: any, min: any, max: any): number;
	export function getScaleFunctionByScaleType(scaleType: any): typeof getQuantizeScale;

}
declare module '@deck.gl/aggregation-layers/utils/bin-sorter' {
	export default class BinSorter {
		constructor(bins?: any[], props?: {
			getValue: (points: any) => any;
			getPoints: (bin: any) => any;
			getIndex: (bin: any) => any;
			filterData: any;
		});
	    /**
	     * Get an array of object with aggregated values and index of bins
	     * Array object will be sorted by value optionally.
	     * @param {Array} bins
	     * @param {Function} getValue
	     * @return {Array} array of values and index lookup
	     */
		getAggregatedBins(bins: any, props: any): any[];
		_percentileToIndex(percentileRange: any): number[];
	    /**
	     * Get a mapping from cell/hexagon index to sorted bin
	     * This is used to retrieve bin value for color calculation
	     * @return {Object} bin index to aggregatedBins
	     */
		getBinMap(): {};
	    /**
	     * Get ths max count of all bins
	     * @return {Number | Boolean} max count
	     */
		_updateMinMaxValues(): void;
	    /**
	     * Get range of values of all bins
	     * @param {Number[]} range
	     * @param {Number} range[0] - lower bound
	     * @param {Number} range[1] - upper bound
	     * @return {Array} array of new value range
	     */
		getValueRange(percentileRange: any): any[];
		getValueDomainByScale(scale: any, [lower, upper]?: [number?, number?]): any;
		_getScaleDomain(scaleType: any, [lowerIdx, upperIdx]: [any, any]): any;
	}

}
declare module '@deck.gl/aggregation-layers/utils/grid-aggregation-utils' {
	export function getBoundingBox(attributes: any, vertexCount: any): {
		xMin: any;
		xMax: any;
		yMin: any;
		yMax: any;
	};
	export function alignToCell(inValue: any, cellSize: any): number;
	/**
	 * Based on geometric center of sample points, calculate cellSize in lng/lat (degree) space
	 * @param {object} boundingBox - {xMin, yMin, xMax, yMax} contains bounding box of data
	 * @param {number} cellSize - grid cell size in meters
	 * @param {boolean, optional} converToDegrees - when true offsets are converted from meters to lng/lat (degree) space
	 * @returns {xOffset, yOffset} - cellSize size
	 */
	export function getGridOffset(boundingBox: any, cellSize: any, convertToMeters?: boolean): {
		xOffset: any;
		yOffset: any;
	};
	export function getGridParams(boundingBox: any, cellSize: any, viewport: any, coordinateSystem: any): {
		gridOffset: {
			xOffset: any;
			yOffset: any;
		};
		translation: number[];
		width: any;
		height: any;
		numCol: number;
		numRow: number;
	};

}
declare module '@deck.gl/aggregation-layers/cpu-grid-layer/grid-aggregator' {
	/**
	 * Calculate density grid from an array of points
	 * @param {Object} props - object containing :
	 * @param {Iterable} [props.data] - data objects to be aggregated
	 * @param {Integer} [props.cellSize] - size of the grid cell
	 *
	 * @param {Object} aggregationParams - object containing :
	 * @param {Object} gridOffset - {xOffset, yOffset} cell size in meters
	 * @param {Integer} width - width of the grid
	 * @param {Integer} height - height of the grid
	 * @param {Boolean} projectPoints - `true` if doing screen space projection, `false` otherwise
	 * @param {Array} attributes - attributes array containing position values
	 * @param {Viewport} viewport - viewport to be used for projection
	 * @param {Array} posOffset - [xOffset, yOffset] offset to be applied to positions to get cell index
	 * @param {Object} boundingBox - {xMin, yMin, xMax, yMax} bounding box of input data
	 *
	 * @returns {object} - grid data, cell dimension
	 */
	export function pointToDensityGridDataCPU(props: any, aggregationParams: any): {
		gridHash: {} | {};
		gridOffset: any;
		data: any[];
	};

}
declare module '@deck.gl/aggregation-layers/grid-aggregation-layer' {
	import AggregationLayer, { AggregationLayerProps } from '@deck.gl/aggregation-layers/aggregation-layer';
	export interface GridAggregationLayerProps<D> extends AggregationLayerProps<D> {

	}
	export default class GridAggregationLayer<D> extends AggregationLayer<D> {
		initializeState({ dimensions }: {
			dimensions: any;
		}): void;
		updateState(opts: any): void;
		finalizeState(): void;
		updateShaders(shaders: any): void;
		updateAggregationState(opts: any): void;
		allocateResources(numRow: any, numCol: any): void;
		updateResults({ aggregationData, maxMinData, maxData, minData }: {
			aggregationData: any;
			maxMinData: any;
			maxData: any;
			minData: any;
		}): void;
		_updateAggregation(opts: any): void;
		_updateWeightBins(): void;
		_uploadAggregationResults(): void;
	}

}
declare module '@deck.gl/aggregation-layers/utils/color-utils' {
	export const defaultColorRange: number[][];
	export function colorRangeToFlatArray(colorRange: any, normalize?: boolean, ArrayType?: Float32ArrayConstructor): any;

}
declare module '@deck.gl/aggregation-layers/screen-grid-layer/screen-grid-layer-vertex.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/screen-grid-layer/screen-grid-layer-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/screen-grid-layer/screen-grid-cell-layer' {
	import { Layer } from '@deck.gl/core';
	import { LayerProps } from "@deck.gl/core/lib/layer";
	export interface ScreenGridCellLayerProps<D> extends LayerProps<D> {

	}
	export default class ScreenGridCellLayer<D> extends Layer<D> {
		constructor(props: ScreenGridCellLayerProps<D>);
		static isSupported(gl: any): any;
		getShaders(): {
			vs: string;
			fs: string;
			modules: any[];
		};
		initializeState(): void;
		shouldUpdateState({ changeFlags }: {
			changeFlags: any;
		}): any;
		updateState({ oldProps, props, changeFlags }: {
			oldProps: ScreenGridCellLayerProps<D>;
			props: ScreenGridCellLayerProps<D>;
			changeFlags: any;
		}): void;
		draw({ uniforms }: {
			uniforms: any;
		}): void;
		calculateInstancePositions(attribute: any, { numInstances }: {
			numInstances: any;
		}): void;
		_getModel(gl: any): any;
		_shouldUseMinMax(): boolean;
		_updateUniforms(oldProps: any, props: any, changeFlags: any): void;
	}

}
declare module '@deck.gl/aggregation-layers/screen-grid-layer/screen-grid-layer' {
	import GridAggregationLayer from '@deck.gl/aggregation-layers/grid-aggregation-layer';
	import { LayerProps } from "@deck.gl/core/lib/layer";
	import { ColorDomain, ColorRange } from "@deck.gl/core/utils/color";
	import { Position } from "@deck.gl/core/utils/positions";
	export interface ScreenGridLayerProps<D> extends LayerProps<D> {
		//Render Options
		cellSizePixels?: number;
		cellMarginPixels?: number;
		colorDomain?: ColorDomain;
		colorRange?: ColorRange;
		gpuAggregation?: boolean;
		aggregation?: string;

		//Data Accessors
		getPosition?: (d: D) => Position;
		getWeight?: (d: D) => number;
	}
	export default class ScreenGridLayer<D> extends GridAggregationLayer<D> {
		constructor(props: ScreenGridLayerProps<D>);
		initializeState(): void;
		shouldUpdateState({ changeFlags }: {
			changeFlags: any;
		}): any;
		updateState(opts: any): void;
		renderLayers(): any;
		finalizeState(): void;
		getPickingInfo({ info, mode }: {
			info: any;
			mode: any;
		}): any;
		updateResults({ aggregationData, maxData }: {
			aggregationData: any;
			maxData: any;
		}): void;
		updateAggregationState(opts: any): void;
		_updateAccessors(opts: any): void;
		_resetResults(): void;
	}

}
declare module '@deck.gl/aggregation-layers/utils/cpu-aggregator' {
	export default class CPUAggregator {
		constructor(opts: any);
		static defaultDimensions(): ({
			key: string;
			accessor: string;
			pickingInfo: string;
			getBins: {
				triggers: {
					value: {
						prop: string;
						updateTrigger: string;
					};
					weight: {
						prop: string;
						updateTrigger: string;
					};
					aggregation: {
						prop: string;
					};
					filterData: {
						prop: string;
						updateTrigger: string;
					};
				};
			};
			getDomain: {
				triggers: {
					lowerPercentile: {
						prop: string;
					};
					upperPercentile: {
						prop: string;
					};
					scaleType: {
						prop: string;
					};
				};
			};
			getScaleFunc: {
				triggers: {
					domain: {
						prop: string;
					};
					range: {
						prop: string;
					};
				};
				onSet: {
					props: string;
				};
			};
			nullValue: number[];
		} | {
			key: string;
			accessor: string;
			pickingInfo: string;
			getBins: {
				triggers: {
					value: {
						prop: string;
						updateTrigger: string;
					};
					weight: {
						prop: string;
						updateTrigger: string;
					};
					aggregation: {
						prop: string;
					};
					filterData: {
						prop: string;
						updateTrigger: string;
					};
				};
			};
			getDomain: {
				triggers: {
					lowerPercentile: {
						prop: string;
					};
					upperPercentile: {
						prop: string;
					};
					scaleType: {
						prop: string;
					};
				};
			};
			getScaleFunc: {
				triggers: {
					domain: {
						prop: string;
					};
					range: {
						prop: string;
					};
				};
				onSet: {
					props: string;
				};
			};
			nullValue: number;
		})[];
		updateState(opts: any, aggregationParams: any): any;
		setState(updateObject: any): void;
		setDimensionState(key: any, updateObject: any): void;
		normalizeResult(result?: {}): {};
		getAggregatedData(props: any, aggregationParams: any): void;
		updateGetValueFuncs(oldProps: any, props: any, changeFlags: any): void;
		needsReProjectPoints(oldProps: any, props: any, changeFlags: any): any;
		addDimension(dimensions: any): void;
		_addDimension(dimensions?: any[]): void;
		getDimensionUpdaters({ key, accessor, pickingInfo, getBins, getDomain, getScaleFunc, nullValue }: {
			key: any;
			accessor: any;
			pickingInfo: any;
			getBins: any;
			getDomain: any;
			getScaleFunc: any;
			nullValue: any;
		}): {
			key: any;
			accessor: any;
			pickingInfo: any;
			getBins: any;
			getDomain: any;
			getScaleFunc: any;
			attributeAccessor: (cell: any) => any;
		};
		needUpdateDimensionStep(dimensionStep: any, oldProps: any, props: any, changeFlags: any): boolean;
		getDimensionChanges(oldProps: any, props: any, changeFlags: any): any[];
		getUpdateTriggers(props: any): {};
		getSortedBins(props: any): void;
		getDimensionSortedBins(props: any, dimensionUpdater: any): void;
		getDimensionValueDomain(props: any, dimensionUpdater: any): void;
		getDimensionScale(props: any, dimensionUpdater: any): void;
		getSubLayerDimensionAttribute(key: any, nullValue: any): (cell: any) => any;
		getSubLayerAccessors(props: any): {};
		getPickingInfo({ info }: {
			info: any;
		}): any;
		getAccessor(dimensionKey: any): any;
	}

}
declare module '@deck.gl/aggregation-layers/cpu-grid-layer/cpu-grid-layer' {
	import AggregationLayer, { Aggregation, AggregationLayerProps } from '@deck.gl/aggregation-layers/aggregation-layer';
	import { ColorDomain, ColorRange } from "@deck.gl/core/utils/color";
	import { Position } from "@deck.gl/core/utils/positions";
	export interface CPUGridLayerProps<D> extends AggregationLayerProps<D> {
		cellSize?: number;
		colorDomain?: ColorDomain;
		colorRange?: ColorRange;
		coverage?: number;
		elevationDomain?: [number, number];
		elevationRange?: [number, number];
		elevationScale?: number;
		extruded?: boolean;
		upperPercentile?: number;
		lowerPercentile?: number;
		elevationUpperPercentile?: number;
		elevationLowerPercentile?: number;
		colorScaleType?: string;
		material?: Object;
		getPosition?: (d: D) => Position;
		getColorValue?: (d: D[]) => number;
		getColorWeight?: (d: D) => number;
		colorAggregation?: string;
		getElevationValue?: (points: D[]) => number;
		getElevationWeight?: (d: D) => number;
		elevationAggregation?: Aggregation;
		onSetColorDomain?: () => void;
		onSetElevationDomain?: () => void;
	}
	export default class CPUGridLayer<D> extends AggregationLayer<D> {
		constructor(props: CPUGridLayerProps<D>);
		initializeState(): void;
		updateState(opts: any): void;
		getPickingInfo({ info }: {
			info: any;
		}): any;
		_onGetSublayerColor(cell: any): any;
		_onGetSublayerElevation(cell: any): any;
		_getSublayerUpdateTriggers(): any;
		renderLayers(): any;
	}

}
declare module '@deck.gl/aggregation-layers/hexagon-layer/hexagon-aggregator' {
	/**
	 * Use d3-hexbin to performs hexagonal binning from geo points to hexagons
	 * @param {Iterable} data - array of points
	 * @param {Number} radius - hexagon radius in meter
	 * @param {function} getPosition - get points lon lat
	 * @param {Object} viewport - current viewport object

	 * @return {Object} - hexagons and countRange
	 */
	export function pointToHexbin(props: any, aggregationParams: any): {
		hexagons: any;
		radiusCommon: number;
	};
	/**
	 * Get the bounding box of all data points
	 */
	export function getPointsCenter(data: any, aggregationParams: any): number[];
	/**
	 * Get radius in mercator world space coordinates from meter
	 * @param {Number} radius - in meter
	 * @param {Object} viewport - current viewport object
	 * @param {Array<Number>} center - data center

	 * @return {Number} radius in mercator world spcae coordinates
	 */
	export function getRadiusInCommon(radius: any, viewport: any, center: any): number;

}
declare module '@deck.gl/aggregation-layers/hexagon-layer/hexagon-layer' {
	import AggregationLayer, { Aggregation, AggregationLayerProps } from '@deck.gl/aggregation-layers/aggregation-layer';
	import { ColorDomain, ColorRange } from "@deck.gl/core/utils/color";
	import { Position } from "@deck.gl/core/utils/positions";
	export interface HexagonLayerProps<D> extends AggregationLayerProps<D> {
		//Render Options
		radius?: number;
		hexagonAggregator?: Function;
		colorDomain?: ColorDomain;
		colorRange?: ColorRange;
		coverage?: number;
		elevationDomain?: [number, number];
		elevationRange?: [number, number];
		elevationScale?: number;
		extruded?: boolean;
		upperPercentile?: number;
		lowerPercentile?: number;
		elevationUpperPercentile?: number;
		elevationLowerPercentile?: number;
		material?: Object;

		//Data Accessors
		getPosition?: (d: D) => Position;
		getColorValue?: (d: D[]) => any;
		getColorWeight?: (d: D) => any;
		colorAggregation?: string;
		getElevationValue?: (d: D) => any;
		getElevationWeight?: (d: D) => any;
		elevationAggregation?: Aggregation;
		onSetColorDomain?: Function;
		onSetElevationDomain?: Function;
	}
	export default class HexagonLayer<D> extends AggregationLayer<D> {
		constructor(props: HexagonLayerProps<D>);
		shouldUpdateState({ changeFlags }: {
			changeFlags: any;
		}): any;
		initializeState(): void;
		updateState(opts: any): void;
		updateRadiusAngle(vertices: any): void;
		convertLatLngToMeterOffset(hexagonVertices: any): number[][];
		getPickingInfo({ info }: {
			info: any;
		}): any;
		_onGetSublayerColor(cell: any): any;
		_onGetSublayerElevation(cell: any): any;
		_getSublayerUpdateTriggers(): any;
		renderLayers(): any;
	}

}
declare module '@deck.gl/aggregation-layers/contour-layer/marching-squares-codes' {
	export const ISOLINES_CODE_OFFSET_MAP: {
		0: any[];
		1: number[][][];
		2: number[][][];
		3: number[][][];
		4: number[][][];
		5: {
			0: number[][][];
			1: number[][][];
		};
		6: number[][][];
		7: number[][][];
		8: number[][][];
		9: number[][][];
		10: {
			0: number[][][];
			1: number[][][];
		};
		11: number[][][];
		12: number[][][];
		13: number[][][];
		14: number[][][];
		15: any[];
	};
	export const ISOBANDS_CODE_OFFSET_MAP: {
		[x: number]: number[][][] | {
			0: number[][][];
			1: number[][][];
			2: number[][][];
		};
	};

}
declare module '@deck.gl/aggregation-layers/contour-layer/marching-squares' {
	export const CONTOUR_TYPE: {
		ISO_LINES: number;
		ISO_BANDS: number;
	};
	export function getCode(opts: any): {
		code: number;
		meanCode: number;
	};
	export function getVertices(opts: any): any[];

}
declare module '@deck.gl/aggregation-layers/contour-layer/contour-utils' {
	export function generateContours({ thresholdData, colors, cellWeights, gridSize, gridOrigin, cellSize }: {
		thresholdData: any;
		colors: any;
		cellWeights: any;
		gridSize: any;
		gridOrigin: any;
		cellSize: any;
	}): {
		contourSegments: any[];
		contourPolygons: any[];
	};

}
declare module '@deck.gl/aggregation-layers/contour-layer/contour-layer' {
	import GridAggregationLayer, { GridAggregationLayerProps } from '@deck.gl/aggregation-layers/grid-aggregation-layer';
	import { Aggregation } from '@deck.gl/aggregation-layers/aggregation-layer';
	import { Position } from "@deck.gl/core/utils/positions";
	export interface ContourLayerProps<D> extends GridAggregationLayerProps<D> {
		//Render Options
		cellSize?: number;
		gpuAggregation?: boolean;
		aggregation?: Aggregation;
		contours?: Array<any>;
		zOffset?: number;

		//Data Accessors
		getPosition?: (d: D) => Position;
		getWeight?: (d: D) => number;
	}
	export default class ContourLayer<D> extends GridAggregationLayer<D> {
		constructor(props: ContourLayerProps<D>);
		initializeState(): void;
		updateState(opts: any): void;
		renderLayers(): any[];
		updateAggregationState(opts: any): void;
		_updateAccessors(opts: any): void;
		_resetResults(): void;
		_generateContours(): void;
		_updateThresholdData(props: any): void;
	}

}
declare module '@deck.gl/aggregation-layers/gpu-grid-layer/gpu-grid-cell-layer-vertex.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/gpu-grid-layer/gpu-grid-cell-layer-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/gpu-grid-layer/gpu-grid-cell-layer' {
	import { Layer } from '@deck.gl/core';
	import { LayerProps } from "@deck.gl/core/lib/layer";
	import { Aggregation } from '@deck.gl/aggregation-layers/aggregation-layer';
	import { ColorRange } from "@deck.gl/core/utils/color";
	import { Position } from "@deck.gl/core/utils/positions";
	export interface GPUGridCellLayerProps<D> extends LayerProps<D> {
		//Render Options
		cellSize?: number;
		colorRange?: ColorRange;
		coverage?: number;
		elevationDomain?: [number, number];
		elevationRange?: [number, number];
		elevationScale?: number;
		extruded?: boolean;
		material?: any;

		//Data Accessors
		getPosition?: (d: D) => Position;
		getColorWeight?: (d: D) => number;
		colorAggregation?: string;
		getElevationWeight?: (d: D) => number;
		elevationAggregation?: Aggregation;
	}
	export default class GPUGridCellLayer<D> extends Layer<D> {
		constructor(props: GPUGridCellLayerProps<D>);
		getShaders(): any;
		initializeState(): void;
		_getModel(gl: any): any;
		draw({ uniforms }: {
			uniforms: any;
		}): void;
		bindUniformBuffers(colorMaxMinBuffer: any, elevationMaxMinBuffer: any): void;
		unbindUniformBuffers(colorMaxMinBuffer: any, elevationMaxMinBuffer: any): void;
		getDomainUniforms(): {};
		_setupUniformBuffer(model: any): void;
	}

}
declare module '@deck.gl/aggregation-layers/gpu-grid-layer/gpu-grid-layer' {
	import { Aggregation } from '@deck.gl/aggregation-layers/aggregation-layer';
	import GridAggregationLayer, { GridAggregationLayerProps } from '@deck.gl/aggregation-layers/grid-aggregation-layer';
	import { ColorRange } from "@deck.gl/core/utils/color";
	import { Position } from "@deck.gl/core/utils/positions";
	export interface GPUGridLayerProps<D> extends GridAggregationLayerProps<D> {
		//Render Options
		cellSize?: number;
		colorRange?: ColorRange;
		coverage?: number;
		elevationDomain?: [number, number];
		elevationRange?: [number, number];
		elevationScale?: number;
		extruded?: boolean;
		material?: any;

		//Data Accessors
		getPosition?: (d: D) => Position;
		getColorWeight?: (d: D) => number;
		colorAggregation?: string;
		getElevationWeight?: (d: D) => number;
		elevationAggregation?: Aggregation;
	}
	export default class GPUGridLayer<D> extends GridAggregationLayer<D> {
		initializeState(): void;
		updateState(opts: any): void;
		getHashKeyForIndex(index: any): string;
		getPositionForIndex(index: any): any[];
		getPickingInfo({ info, mode }: {
			info: any;
			mode: any;
		}): any;
		renderLayers(): any;
		finalizeState(): void;
		updateAggregationState(opts: any): void;
		_updateAccessors(opts: any): void;
	}

}
declare module '@deck.gl/aggregation-layers/grid-layer/grid-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	import { CompositeLayerProps } from "@deck.gl/core/lib/composite-layer";
	import { ColorDomain, ColorRange } from "@deck.gl/core/utils/color";
	import { Position } from "@deck.gl/core/utils/positions";
	import { Aggregation } from '@deck.gl/aggregation-layers/aggregation-layer';
	export interface GridLayerProps<D> extends CompositeLayerProps<D> {
		//Render Options
		cellSize?: number;
		colorDomain?: ColorDomain;
		colorRange?: ColorRange;
		coverage?: number;
		elevationDomain?: [number, number];
		elevationRange?: [number, number];
		elevationScale?: number;
		extruded?: boolean;
		upperPercentile?: number;
		lowerPercentile?: number;
		elevationUpperPercentile?: number;
		elevationLowerPercentile?: number;
		colorScaleType?: string;
		fp64?: boolean;
		gpuAggregation?: boolean;
		material?: any;

		//Data Accessors
		getPosition?: (d: D) => Position;
		getColorValue?: (points: D[]) => number;
		getColorWeight?: (d: D) => number;
		colorAggregation?: string;
		getElevationValue?: (points: D[]) => number;
		getElevationWeight?: (d: D) => number;
		elevationAggregation?: Aggregation;
		onSetColorDomain?: () => void;
		onSetElevationDomain?: () => void;
	}
	export default class GridLayer<D> extends CompositeLayer<D> {
		constructor(props: GridLayerProps<D>);
		initializeState(): void;
		updateState({ oldProps, props, changeFlags }: {
			oldProps: any;
			props: any;
			changeFlags: any;
		}): void;
		renderLayers(): any;
		canUseGPUAggregation(props: any): boolean;
	}

}
declare module '@deck.gl/aggregation-layers/heatmap-layer/heatmap-layer-utils' {
	export function getBounds(points: any): any[];
	export function boundsContain(currentBounds: any, targetBounds: any): boolean;
	export function packVertices(points: any, dimensions?: number): Float32Array;
	export function scaleToAspectRatio(boundingBox: any, width: any, height: any): number[];
	export function getTextureCoordinates(point: any, bounds: any): number[];
	export function getTextureParams({ gl, floatTargetSupport }: {
		gl: any;
		floatTargetSupport: any;
	}): {
		format: any;
		type: any;
	};

}
declare module '@deck.gl/aggregation-layers/heatmap-layer/triangle-layer-vertex.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/heatmap-layer/triangle-layer-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/heatmap-layer/triangle-layer' {
	import { Layer } from '@deck.gl/core';
	export default class TriangleLayer<D> extends Layer<D> {
		getShaders(): {
			vs: string;
			fs: string;
			modules: any[];
		};
		initializeState(): void;
		_getModel(gl: any): any;
		draw({ uniforms }: {
			uniforms: any;
		}): void;
	}

}
declare module '@deck.gl/aggregation-layers/heatmap-layer/weights-vs.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/heatmap-layer/weights-fs.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/heatmap-layer/max-vs.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/heatmap-layer/heatmap-layer' {
	import AggregationLayer, { AggregationLayerProps } from '@deck.gl/aggregation-layers/aggregation-layer';
	import { ColorDomain, ColorRange } from "@deck.gl/core/utils/color";
	import { Position } from "@deck.gl/core/utils/positions";
	export interface HeatmapLayerProps<D> extends AggregationLayerProps<D> {
		//Render Options
		radiusPixels?: number;
		colorRange?: ColorRange;
		intensity?: number;
		threshold?: number;
		colorDomain?: ColorDomain;

		//Data Accessors
		getPosition?: (d: D) => Position;
		getWeight?: (d: D) => number;
	}
	export default class HeatmapLayer<D> extends AggregationLayer<D> {
		initializeState(): void;
		shouldUpdateState({ changeFlags }: {
			changeFlags: any;
		}): any;
		updateState(opts: any): void;
		renderLayers(): any;
		finalizeState(): void;
		_getAttributeManager(): any;
		_getChangeFlags(opts: any): {};
		_createTextures(): void;
		_setupAttributes(): void;
		_setupTextureParams(): void;
		_createWeightsTransform(shaderOptions?: {}): void;
		_setupResources(): void;
		updateShaders(shaderOptions: any): void;
		_updateMaxWeightValue(): void;
		_updateBounds(forceUpdate?: boolean): boolean;
		_updateTextureRenderingBounds(): void;
		_updateColorTexture(opts: any): void;
		_updateWeightmap(): void;
		_debouncedUpdateWeightmap(fromTimer?: boolean): void;
		_worldToCommonBounds(worldBounds: any, opts?: {}): any;
		_commonToWorldBounds(commonBounds: any): any;
	}

}
declare module '@deck.gl/aggregation-layers' {
	export { default as ScreenGridLayer } from '@deck.gl/aggregation-layers/screen-grid-layer/screen-grid-layer';
	export { default as CPUGridLayer } from '@deck.gl/aggregation-layers/cpu-grid-layer/cpu-grid-layer';
	export { default as HexagonLayer } from '@deck.gl/aggregation-layers/hexagon-layer/hexagon-layer';
	export { default as ContourLayer } from '@deck.gl/aggregation-layers/contour-layer/contour-layer';
	export { default as GridLayer } from '@deck.gl/aggregation-layers/grid-layer/grid-layer';
	export { default as GPUGridLayer } from '@deck.gl/aggregation-layers/gpu-grid-layer/gpu-grid-layer';
	export { AGGREGATION_OPERATION } from '@deck.gl/aggregation-layers/utils/aggregation-operation-utils';
	export { default as HeatmapLayer } from '@deck.gl/aggregation-layers/heatmap-layer/heatmap-layer';
	export { default as _GPUGridAggregator } from '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/gpu-grid-aggregator';
	export { default as _CPUAggregator } from '@deck.gl/aggregation-layers/utils/cpu-aggregator';
	export { default as _AggregationLayer } from '@deck.gl/aggregation-layers/aggregation-layer';
	export { default as _BinSorter } from '@deck.gl/aggregation-layers/utils/bin-sorter';

}
