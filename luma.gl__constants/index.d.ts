//typings for @luma.gl/constants v8.1.2
declare module '@luma.gl/constants' {
	const DEPTH_BUFFER_BIT: number;
	const STENCIL_BUFFER_BIT: number;
	const COLOR_BUFFER_BIT: number;
	const POINTS: number;
	const LINES: number;
	const LINE_LOOP: number;
	const LINE_STRIP: number;
	const TRIANGLES: number;
	const TRIANGLE_STRIP: number;
	const TRIANGLE_FAN: number;
	const ZERO: number;
	const ONE: number;
	const SRC_COLOR: number;
	const ONE_MINUS_SRC_COLOR: number;
	const SRC_ALPHA: number;
	const ONE_MINUS_SRC_ALPHA: number;
	const DST_ALPHA: number;
	const ONE_MINUS_DST_ALPHA: number;
	const DST_COLOR: number;
	const ONE_MINUS_DST_COLOR: number;
	const SRC_ALPHA_SATURATE: number;
	const CONSTANT_COLOR: number;
	const ONE_MINUS_CONSTANT_COLOR: number;
	const CONSTANT_ALPHA: number;
	const ONE_MINUS_CONSTANT_ALPHA: number;
	const FUNC_ADD: number;
	const FUNC_SUBTRACT: number;
	const FUNC_REVERSE_SUBTRACT: number;
	const BLEND_EQUATION: number;
	const BLEND_EQUATION_RGB: number;
	const BLEND_EQUATION_ALPHA: number;
	const BLEND_DST_RGB: number;
	const BLEND_SRC_RGB: number;
	const BLEND_DST_ALPHA: number;
	const BLEND_SRC_ALPHA: number;
	const BLEND_COLOR: number;
	const ARRAY_BUFFER_BINDING: number;
	const ELEMENT_ARRAY_BUFFER_BINDING: number;
	const LINE_WIDTH: number;
	const ALIASED_POINT_SIZE_RANGE: number;
	const ALIASED_LINE_WIDTH_RANGE: number;
	const CULL_FACE_MODE: number;
	const FRONT_FACE: number;
	const DEPTH_RANGE: number;
	const DEPTH_WRITEMASK: number;
	const DEPTH_CLEAR_VALUE: number;
	const DEPTH_FUNC: number;
	const STENCIL_CLEAR_VALUE: number;
	const STENCIL_FUNC: number;
	const STENCIL_FAIL: number;
	const STENCIL_PASS_DEPTH_FAIL: number;
	const STENCIL_PASS_DEPTH_PASS: number;
	const STENCIL_REF: number;
	const STENCIL_VALUE_MASK: number;
	const STENCIL_WRITEMASK: number;
	const STENCIL_BACK_FUNC: number;
	const STENCIL_BACK_FAIL: number;
	const STENCIL_BACK_PASS_DEPTH_FAIL: number;
	const STENCIL_BACK_PASS_DEPTH_PASS: number;
	const STENCIL_BACK_REF: number;
	const STENCIL_BACK_VALUE_MASK: number;
	const STENCIL_BACK_WRITEMASK: number;
	const VIEWPORT: number;
	const SCISSOR_BOX: number;
	const COLOR_CLEAR_VALUE: number;
	const COLOR_WRITEMASK: number;
	const UNPACK_ALIGNMENT: number;
	const PACK_ALIGNMENT: number;
	const MAX_TEXTURE_SIZE: number;
	const MAX_VIEWPORT_DIMS: number;
	const SUBPIXEL_BITS: number;
	const RED_BITS: number;
	const GREEN_BITS: number;
	const BLUE_BITS: number;
	const ALPHA_BITS: number;
	const DEPTH_BITS: number;
	const STENCIL_BITS: number;
	const POLYGON_OFFSET_UNITS: number;
	const POLYGON_OFFSET_FACTOR: number;
	const TEXTURE_BINDING_2D: number;
	const SAMPLE_BUFFERS: number;
	const SAMPLES: number;
	const SAMPLE_COVERAGE_VALUE: number;
	const SAMPLE_COVERAGE_INVERT: number;
	const COMPRESSED_TEXTURE_FORMATS: number;
	const VENDOR: number;
	const RENDERER: number;
	const VERSION: number;
	const IMPLEMENTATION_COLOR_READ_TYPE: number;
	const IMPLEMENTATION_COLOR_READ_FORMAT: number;
	const BROWSER_DEFAULT_WEBGL: number;
	const STATIC_DRAW: number;
	const STREAM_DRAW: number;
	const DYNAMIC_DRAW: number;
	const ARRAY_BUFFER: number;
	const ELEMENT_ARRAY_BUFFER: number;
	const BUFFER_SIZE: number;
	const BUFFER_USAGE: number;
	const CURRENT_VERTEX_ATTRIB: number;
	const VERTEX_ATTRIB_ARRAY_ENABLED: number;
	const VERTEX_ATTRIB_ARRAY_SIZE: number;
	const VERTEX_ATTRIB_ARRAY_STRIDE: number;
	const VERTEX_ATTRIB_ARRAY_TYPE: number;
	const VERTEX_ATTRIB_ARRAY_NORMALIZED: number;
	const VERTEX_ATTRIB_ARRAY_POINTER: number;
	const VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;
	const CULL_FACE: number;
	const FRONT: number;
	const BACK: number;
	const FRONT_AND_BACK: number;
	const BLEND: number;
	const DEPTH_TEST: number;
	const DITHER: number;
	const POLYGON_OFFSET_FILL: number;
	const SAMPLE_ALPHA_TO_COVERAGE: number;
	const SAMPLE_COVERAGE: number;
	const SCISSOR_TEST: number;
	const STENCIL_TEST: number;
	const NO_ERROR: number;
	const INVALID_ENUM: number;
	const INVALID_VALUE: number;
	const INVALID_OPERATION: number;
	const OUT_OF_MEMORY: number;
	const CONTEXT_LOST_WEBGL: number;
	const CW: number;
	const CCW: number;
	const DONT_CARE: number;
	const FASTEST: number;
	const NICEST: number;
	const GENERATE_MIPMAP_HINT: number;
	const BYTE: number;
	const UNSIGNED_BYTE: number;
	const SHORT: number;
	const UNSIGNED_SHORT: number;
	const INT: number;
	const UNSIGNED_INT: number;
	const FLOAT: number;
	const DOUBLE: number;
	const DEPTH_COMPONENT: number;
	const ALPHA: number;
	const RGB: number;
	const RGBA: number;
	const LUMINANCE: number;
	const LUMINANCE_ALPHA: number;
	const UNSIGNED_SHORT_4_4_4_4: number;
	const UNSIGNED_SHORT_5_5_5_1: number;
	const UNSIGNED_SHORT_5_6_5: number;
	const FRAGMENT_SHADER: number;
	const VERTEX_SHADER: number;
	const COMPILE_STATUS: number;
	const DELETE_STATUS: number;
	const LINK_STATUS: number;
	const VALIDATE_STATUS: number;
	const ATTACHED_SHADERS: number;
	const ACTIVE_ATTRIBUTES: number;
	const ACTIVE_UNIFORMS: number;
	const MAX_VERTEX_ATTRIBS: number;
	const MAX_VERTEX_UNIFORM_VECTORS: number;
	const MAX_VARYING_VECTORS: number;
	const MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;
	const MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;
	const MAX_TEXTURE_IMAGE_UNITS: number;
	const MAX_FRAGMENT_UNIFORM_VECTORS: number;
	const SHADER_TYPE: number;
	const SHADING_LANGUAGE_VERSION: number;
	const CURRENT_PROGRAM: number;
	const NEVER: number;
	const ALWAYS: number;
	const LESS: number;
	const EQUAL: number;
	const LEQUAL: number;
	const GREATER: number;
	const GEQUAL: number;
	const NOTEQUAL: number;
	const KEEP: number;
	const REPLACE: number;
	const INCR: number;
	const DECR: number;
	const INVERT: number;
	const INCR_WRAP: number;
	const DECR_WRAP: number;
	const NEAREST: number;
	const LINEAR: number;
	const NEAREST_MIPMAP_NEAREST: number;
	const LINEAR_MIPMAP_NEAREST: number;
	const NEAREST_MIPMAP_LINEAR: number;
	const LINEAR_MIPMAP_LINEAR: number;
	const TEXTURE_MAG_FILTER: number;
	const TEXTURE_MIN_FILTER: number;
	const TEXTURE_WRAP_S: number;
	const TEXTURE_WRAP_T: number;
	const TEXTURE_2D: number;
	const TEXTURE: number;
	const TEXTURE_CUBE_MAP: number;
	const TEXTURE_BINDING_CUBE_MAP: number;
	const TEXTURE_CUBE_MAP_POSITIVE_X: number;
	const TEXTURE_CUBE_MAP_NEGATIVE_X: number;
	const TEXTURE_CUBE_MAP_POSITIVE_Y: number;
	const TEXTURE_CUBE_MAP_NEGATIVE_Y: number;
	const TEXTURE_CUBE_MAP_POSITIVE_Z: number;
	const TEXTURE_CUBE_MAP_NEGATIVE_Z: number;
	const MAX_CUBE_MAP_TEXTURE_SIZE: number;
	const TEXTURE0: number;
	const ACTIVE_TEXTURE: number;
	const REPEAT: number;
	const CLAMP_TO_EDGE: number;
	const MIRRORED_REPEAT: number;
	const TEXTURE_WIDTH: number;
	const TEXTURE_HEIGHT: number;
	const FLOAT_VEC2: number;
	const FLOAT_VEC3: number;
	const FLOAT_VEC4: number;
	const INT_VEC2: number;
	const INT_VEC3: number;
	const INT_VEC4: number;
	const BOOL: number;
	const BOOL_VEC2: number;
	const BOOL_VEC3: number;
	const BOOL_VEC4: number;
	const FLOAT_MAT2: number;
	const FLOAT_MAT3: number;
	const FLOAT_MAT4: number;
	const SAMPLER_2D: number;
	const SAMPLER_CUBE: number;
	const LOW_FLOAT: number;
	const MEDIUM_FLOAT: number;
	const HIGH_FLOAT: number;
	const LOW_INT: number;
	const MEDIUM_INT: number;
	const HIGH_INT: number;
	const FRAMEBUFFER: number;
	const RENDERBUFFER: number;
	const RGBA4: number;
	const RGB5_A1: number;
	const RGB565: number;
	const DEPTH_COMPONENT16: number;
	const STENCIL_INDEX: number;
	const STENCIL_INDEX8: number;
	const DEPTH_STENCIL: number;
	const RENDERBUFFER_WIDTH: number;
	const RENDERBUFFER_HEIGHT: number;
	const RENDERBUFFER_INTERNAL_FORMAT: number;
	const RENDERBUFFER_RED_SIZE: number;
	const RENDERBUFFER_GREEN_SIZE: number;
	const RENDERBUFFER_BLUE_SIZE: number;
	const RENDERBUFFER_ALPHA_SIZE: number;
	const RENDERBUFFER_DEPTH_SIZE: number;
	const RENDERBUFFER_STENCIL_SIZE: number;
	const FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;
	const FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;
	const FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;
	const FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;
	const COLOR_ATTACHMENT0: number;
	const DEPTH_ATTACHMENT: number;
	const STENCIL_ATTACHMENT: number;
	const DEPTH_STENCIL_ATTACHMENT: number;
	const NONE: number;
	const FRAMEBUFFER_COMPLETE: number;
	const FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;
	const FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;
	const FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;
	const FRAMEBUFFER_UNSUPPORTED: number;
	const FRAMEBUFFER_BINDING: number;
	const RENDERBUFFER_BINDING: number;
	const READ_FRAMEBUFFER: number;
	const DRAW_FRAMEBUFFER: number;
	const MAX_RENDERBUFFER_SIZE: number;
	const INVALID_FRAMEBUFFER_OPERATION: number;
	const UNPACK_FLIP_Y_WEBGL: number;
	const UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;
	const UNPACK_COLORSPACE_CONVERSION_WEBGL: number;
	const READ_BUFFER: number;
	const UNPACK_ROW_LENGTH: number;
	const UNPACK_SKIP_ROWS: number;
	const UNPACK_SKIP_PIXELS: number;
	const PACK_ROW_LENGTH: number;
	const PACK_SKIP_ROWS: number;
	const PACK_SKIP_PIXELS: number;
	const TEXTURE_BINDING_3D: number;
	const UNPACK_SKIP_IMAGES: number;
	const UNPACK_IMAGE_HEIGHT: number;
	const MAX_3D_TEXTURE_SIZE: number;
	const MAX_ELEMENTS_VERTICES: number;
	const MAX_ELEMENTS_INDICES: number;
	const MAX_TEXTURE_LOD_BIAS: number;
	const MAX_FRAGMENT_UNIFORM_COMPONENTS: number;
	const MAX_VERTEX_UNIFORM_COMPONENTS: number;
	const MAX_ARRAY_TEXTURE_LAYERS: number;
	const MIN_PROGRAM_TEXEL_OFFSET: number;
	const MAX_PROGRAM_TEXEL_OFFSET: number;
	const MAX_VARYING_COMPONENTS: number;
	const FRAGMENT_SHADER_DERIVATIVE_HINT: number;
	const RASTERIZER_DISCARD: number;
	const VERTEX_ARRAY_BINDING: number;
	const MAX_VERTEX_OUTPUT_COMPONENTS: number;
	const MAX_FRAGMENT_INPUT_COMPONENTS: number;
	const MAX_SERVER_WAIT_TIMEOUT: number;
	const MAX_ELEMENT_INDEX: number;
	const RED: number;
	const RGB8: number;
	const RGBA8: number;
	const RGB10_A2: number;
	const TEXTURE_3D: number;
	const TEXTURE_WRAP_R: number;
	const TEXTURE_MIN_LOD: number;
	const TEXTURE_MAX_LOD: number;
	const TEXTURE_BASE_LEVEL: number;
	const TEXTURE_MAX_LEVEL: number;
	const TEXTURE_COMPARE_MODE: number;
	const TEXTURE_COMPARE_FUNC: number;
	const SRGB: number;
	const SRGB8: number;
	const SRGB8_ALPHA8: number;
	const COMPARE_REF_TO_TEXTURE: number;
	const RGBA32F: number;
	const RGB32F: number;
	const RGBA16F: number;
	const RGB16F: number;
	const TEXTURE_2D_ARRAY: number;
	const TEXTURE_BINDING_2D_ARRAY: number;
	const R11F_G11F_B10F: number;
	const RGB9_E5: number;
	const RGBA32UI: number;
	const RGB32UI: number;
	const RGBA16UI: number;
	const RGB16UI: number;
	const RGBA8UI: number;
	const RGB8UI: number;
	const RGBA32I: number;
	const RGB32I: number;
	const RGBA16I: number;
	const RGB16I: number;
	const RGBA8I: number;
	const RGB8I: number;
	const RED_INTEGER: number;
	const RGB_INTEGER: number;
	const RGBA_INTEGER: number;
	const R8: number;
	const RG8: number;
	const R16F: number;
	const R32F: number;
	const RG16F: number;
	const RG32F: number;
	const R8I: number;
	const R8UI: number;
	const R16I: number;
	const R16UI: number;
	const R32I: number;
	const R32UI: number;
	const RG8I: number;
	const RG8UI: number;
	const RG16I: number;
	const RG16UI: number;
	const RG32I: number;
	const RG32UI: number;
	const R8_SNORM: number;
	const RG8_SNORM: number;
	const RGB8_SNORM: number;
	const RGBA8_SNORM: number;
	const RGB10_A2UI: number;
	const TEXTURE_IMMUTABLE_FORMAT: number;
	const TEXTURE_IMMUTABLE_LEVELS: number;
	const UNSIGNED_INT_2_10_10_10_REV: number;
	const UNSIGNED_INT_10F_11F_11F_REV: number;
	const UNSIGNED_INT_5_9_9_9_REV: number;
	const FLOAT_32_UNSIGNED_INT_24_8_REV: number;
	const UNSIGNED_INT_24_8: number;
	const HALF_FLOAT: number;
	const RG: number;
	const RG_INTEGER: number;
	const INT_2_10_10_10_REV: number;
	const CURRENT_QUERY: number;
	const QUERY_RESULT: number;
	const QUERY_RESULT_AVAILABLE: number;
	const ANY_SAMPLES_PASSED: number;
	const ANY_SAMPLES_PASSED_CONSERVATIVE: number;
	const MAX_DRAW_BUFFERS: number;
	const DRAW_BUFFER0: number;
	const DRAW_BUFFER1: number;
	const DRAW_BUFFER2: number;
	const DRAW_BUFFER3: number;
	const DRAW_BUFFER4: number;
	const DRAW_BUFFER5: number;
	const DRAW_BUFFER6: number;
	const DRAW_BUFFER7: number;
	const DRAW_BUFFER8: number;
	const DRAW_BUFFER9: number;
	const DRAW_BUFFER10: number;
	const DRAW_BUFFER11: number;
	const DRAW_BUFFER12: number;
	const DRAW_BUFFER13: number;
	const DRAW_BUFFER14: number;
	const DRAW_BUFFER15: number;
	const MAX_COLOR_ATTACHMENTS: number;
	const COLOR_ATTACHMENT1: number;
	const COLOR_ATTACHMENT2: number;
	const COLOR_ATTACHMENT3: number;
	const COLOR_ATTACHMENT4: number;
	const COLOR_ATTACHMENT5: number;
	const COLOR_ATTACHMENT6: number;
	const COLOR_ATTACHMENT7: number;
	const COLOR_ATTACHMENT8: number;
	const COLOR_ATTACHMENT9: number;
	const COLOR_ATTACHMENT10: number;
	const COLOR_ATTACHMENT11: number;
	const COLOR_ATTACHMENT12: number;
	const COLOR_ATTACHMENT13: number;
	const COLOR_ATTACHMENT14: number;
	const COLOR_ATTACHMENT15: number;
	const SAMPLER_3D: number;
	const SAMPLER_2D_SHADOW: number;
	const SAMPLER_2D_ARRAY: number;
	const SAMPLER_2D_ARRAY_SHADOW: number;
	const SAMPLER_CUBE_SHADOW: number;
	const INT_SAMPLER_2D: number;
	const INT_SAMPLER_3D: number;
	const INT_SAMPLER_CUBE: number;
	const INT_SAMPLER_2D_ARRAY: number;
	const UNSIGNED_INT_SAMPLER_2D: number;
	const UNSIGNED_INT_SAMPLER_3D: number;
	const UNSIGNED_INT_SAMPLER_CUBE: number;
	const UNSIGNED_INT_SAMPLER_2D_ARRAY: number;
	const MAX_SAMPLES: number;
	const SAMPLER_BINDING: number;
	const PIXEL_PACK_BUFFER: number;
	const PIXEL_UNPACK_BUFFER: number;
	const PIXEL_PACK_BUFFER_BINDING: number;
	const PIXEL_UNPACK_BUFFER_BINDING: number;
	const COPY_READ_BUFFER: number;
	const COPY_WRITE_BUFFER: number;
	const COPY_READ_BUFFER_BINDING: number;
	const COPY_WRITE_BUFFER_BINDING: number;
	const FLOAT_MAT2x3: number;
	const FLOAT_MAT2x4: number;
	const FLOAT_MAT3x2: number;
	const FLOAT_MAT3x4: number;
	const FLOAT_MAT4x2: number;
	const FLOAT_MAT4x3: number;
	const UNSIGNED_INT_VEC2: number;
	const UNSIGNED_INT_VEC3: number;
	const UNSIGNED_INT_VEC4: number;
	const UNSIGNED_NORMALIZED: number;
	const SIGNED_NORMALIZED: number;
	const VERTEX_ATTRIB_ARRAY_INTEGER: number;
	const VERTEX_ATTRIB_ARRAY_DIVISOR: number;
	const TRANSFORM_FEEDBACK_BUFFER_MODE: number;
	const MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: number;
	const TRANSFORM_FEEDBACK_VARYINGS: number;
	const TRANSFORM_FEEDBACK_BUFFER_START: number;
	const TRANSFORM_FEEDBACK_BUFFER_SIZE: number;
	const TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: number;
	const MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: number;
	const MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: number;
	const INTERLEAVED_ATTRIBS: number;
	const SEPARATE_ATTRIBS: number;
	const TRANSFORM_FEEDBACK_BUFFER: number;
	const TRANSFORM_FEEDBACK_BUFFER_BINDING: number;
	const TRANSFORM_FEEDBACK: number;
	const TRANSFORM_FEEDBACK_PAUSED: number;
	const TRANSFORM_FEEDBACK_ACTIVE: number;
	const TRANSFORM_FEEDBACK_BINDING: number;
	const FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: number;
	const FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: number;
	const FRAMEBUFFER_ATTACHMENT_RED_SIZE: number;
	const FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: number;
	const FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: number;
	const FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: number;
	const FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: number;
	const FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: number;
	const FRAMEBUFFER_DEFAULT: number;
	const DEPTH24_STENCIL8: number;
	const DRAW_FRAMEBUFFER_BINDING: number;
	const READ_FRAMEBUFFER_BINDING: number;
	const RENDERBUFFER_SAMPLES: number;
	const FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: number;
	const FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: number;
	const UNIFORM_BUFFER: number;
	const UNIFORM_BUFFER_BINDING: number;
	const UNIFORM_BUFFER_START: number;
	const UNIFORM_BUFFER_SIZE: number;
	const MAX_VERTEX_UNIFORM_BLOCKS: number;
	const MAX_FRAGMENT_UNIFORM_BLOCKS: number;
	const MAX_COMBINED_UNIFORM_BLOCKS: number;
	const MAX_UNIFORM_BUFFER_BINDINGS: number;
	const MAX_UNIFORM_BLOCK_SIZE: number;
	const MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: number;
	const MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: number;
	const UNIFORM_BUFFER_OFFSET_ALIGNMENT: number;
	const ACTIVE_UNIFORM_BLOCKS: number;
	const UNIFORM_TYPE: number;
	const UNIFORM_SIZE: number;
	const UNIFORM_BLOCK_INDEX: number;
	const UNIFORM_OFFSET: number;
	const UNIFORM_ARRAY_STRIDE: number;
	const UNIFORM_MATRIX_STRIDE: number;
	const UNIFORM_IS_ROW_MAJOR: number;
	const UNIFORM_BLOCK_BINDING: number;
	const UNIFORM_BLOCK_DATA_SIZE: number;
	const UNIFORM_BLOCK_ACTIVE_UNIFORMS: number;
	const UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: number;
	const UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: number;
	const UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: number;
	const OBJECT_TYPE: number;
	const SYNC_CONDITION: number;
	const SYNC_STATUS: number;
	const SYNC_FLAGS: number;
	const SYNC_FENCE: number;
	const SYNC_GPU_COMMANDS_COMPLETE: number;
	const UNSIGNALED: number;
	const SIGNALED: number;
	const ALREADY_SIGNALED: number;
	const TIMEOUT_EXPIRED: number;
	const CONDITION_SATISFIED: number;
	const WAIT_FAILED: number;
	const SYNC_FLUSH_COMMANDS_BIT: number;
	const COLOR: number;
	const DEPTH: number;
	const STENCIL: number;
	const MIN: number;
	const MAX: number;
	const DEPTH_COMPONENT24: number;
	const STREAM_READ: number;
	const STREAM_COPY: number;
	const STATIC_READ: number;
	const STATIC_COPY: number;
	const DYNAMIC_READ: number;
	const DYNAMIC_COPY: number;
	const DEPTH_COMPONENT32F: number;
	const DEPTH32F_STENCIL8: number;
	const INVALID_INDEX: number;
	const TIMEOUT_IGNORED: number;
	const MAX_CLIENT_WAIT_TIMEOUT_WEBGL: number;
	const VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: number;
	const UNMASKED_VENDOR_WEBGL: number;
	const UNMASKED_RENDERER_WEBGL: number;
	const MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;
	const TEXTURE_MAX_ANISOTROPY_EXT: number;
	const COMPRESSED_RGB_S3TC_DXT1_EXT: number;
	const COMPRESSED_RGBA_S3TC_DXT1_EXT: number;
	const COMPRESSED_RGBA_S3TC_DXT3_EXT: number;
	const COMPRESSED_RGBA_S3TC_DXT5_EXT: number;
	const COMPRESSED_R11_EAC: number;
	const COMPRESSED_SIGNED_R11_EAC: number;
	const COMPRESSED_RG11_EAC: number;
	const COMPRESSED_SIGNED_RG11_EAC: number;
	const COMPRESSED_RGB8_ETC2: number;
	const COMPRESSED_RGBA8_ETC2_EAC: number;
	const COMPRESSED_SRGB8_ETC2: number;
	const COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: number;
	const COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: number;
	const COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: number;
	const COMPRESSED_RGB_PVRTC_4BPPV1_IMG: number;
	const COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: number;
	const COMPRESSED_RGB_PVRTC_2BPPV1_IMG: number;
	const COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: number;
	const COMPRESSED_RGB_ETC1_WEBGL: number;
	const COMPRESSED_RGB_ATC_WEBGL: number;
	const COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL: number;
	const COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL: number;
	const UNSIGNED_INT_24_8_WEBGL: number;
	const HALF_FLOAT_OES: number;
	const RGBA32F_EXT: number;
	const RGB32F_EXT: number;
	const FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: number;
	const UNSIGNED_NORMALIZED_EXT: number;
	const MIN_EXT: number;
	const MAX_EXT: number;
	const SRGB_EXT: number;
	const SRGB_ALPHA_EXT: number;
	const SRGB8_ALPHA8_EXT: number;
	const FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: number;
	const FRAGMENT_SHADER_DERIVATIVE_HINT_OES: number;
	const COLOR_ATTACHMENT0_WEBGL: number;
	const COLOR_ATTACHMENT1_WEBGL: number;
	const COLOR_ATTACHMENT2_WEBGL: number;
	const COLOR_ATTACHMENT3_WEBGL: number;
	const COLOR_ATTACHMENT4_WEBGL: number;
	const COLOR_ATTACHMENT5_WEBGL: number;
	const COLOR_ATTACHMENT6_WEBGL: number;
	const COLOR_ATTACHMENT7_WEBGL: number;
	const COLOR_ATTACHMENT8_WEBGL: number;
	const COLOR_ATTACHMENT9_WEBGL: number;
	const COLOR_ATTACHMENT10_WEBGL: number;
	const COLOR_ATTACHMENT11_WEBGL: number;
	const COLOR_ATTACHMENT12_WEBGL: number;
	const COLOR_ATTACHMENT13_WEBGL: number;
	const COLOR_ATTACHMENT14_WEBGL: number;
	const COLOR_ATTACHMENT15_WEBGL: number;
	const DRAW_BUFFER0_WEBGL: number;
	const DRAW_BUFFER1_WEBGL: number;
	const DRAW_BUFFER2_WEBGL: number;
	const DRAW_BUFFER3_WEBGL: number;
	const DRAW_BUFFER4_WEBGL: number;
	const DRAW_BUFFER5_WEBGL: number;
	const DRAW_BUFFER6_WEBGL: number;
	const DRAW_BUFFER7_WEBGL: number;
	const DRAW_BUFFER8_WEBGL: number;
	const DRAW_BUFFER9_WEBGL: number;
	const DRAW_BUFFER10_WEBGL: number;
	const DRAW_BUFFER11_WEBGL: number;
	const DRAW_BUFFER12_WEBGL: number;
	const DRAW_BUFFER13_WEBGL: number;
	const DRAW_BUFFER14_WEBGL: number;
	const DRAW_BUFFER15_WEBGL: number;
	const MAX_COLOR_ATTACHMENTS_WEBGL: number;
	const MAX_DRAW_BUFFERS_WEBGL: number;
	const VERTEX_ARRAY_BINDING_OES: number;
	const QUERY_COUNTER_BITS_EXT: number;
	const CURRENT_QUERY_EXT: number;
	const QUERY_RESULT_EXT: number;
	const QUERY_RESULT_AVAILABLE_EXT: number;
	const TIME_ELAPSED_EXT: number;
	const TIMESTAMP_EXT: number;
	const GPU_DISJOINT_EXT: number;
}
