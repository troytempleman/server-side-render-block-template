// External dependencies
import classnames from 'classnames';

// WordPress dependencies
import { 
	AlignmentToolbar, 
	BlockControls,
	InspectorControls, 
	useBlockProps 
} from '@wordpress/block-editor';
import {
	Disabled,
	PanelBody,
	RangeControl, 
	SelectControl, 
	TextControl
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';

// Internal dependencies
import { usePostTypes } from './utils';

// Editor styles
import './editor.scss';

// Edit
export default function Edit( { attributes, setAttributes } ) {
	
	// Attributes
	const { 
		textAlign,
		title,
		postType,
		numberOfPosts
	} = attributes;
	
	// Block content
	const blockContent = () => {	
	
		// Wrapper 
		const wrapperAttributes = useBlockProps( {
			className: classnames( {
				[ `has-text-align-${ textAlign }` ]: textAlign,
			} ),
		} );
		
		return(	
			<div { ...wrapperAttributes }>
				<Disabled>
					<ServerSideRender
						block="tt/server-side-render-block-template"
						skipBlockSupportAttributes
						attributes={ attributes }
					/>
				</Disabled>
			</div>
		)
	}

	// Inspector controls
	const inspectorControls = () => {	
		
		// Post type select options
		const { postTypesSelectOptions } = usePostTypes();
		
		return(	
			<>
				<InspectorControls>
					<PanelBody title={ __( 'Settings', 'server-side-render-block-template' ) }>
						<TextControl
							label={ __( 'Title', 'server-side-render-block-template' ) }
							value={ title }
							onChange={ ( value ) => setAttributes( { title: value } ) }
						/>
						<SelectControl
			                label={ __( 'Post type', 'server-side-render-block-template' ) }
			                value={ postType }
			                options={ postTypesSelectOptions }
			                onChange={ ( value ) => setAttributes( { postType: value } ) }
			            />
						<RangeControl
							label={ __( 'Number of posts', 'server-side-render-block-template' ) }
							value={ numberOfPosts }
							onChange={ ( value ) => setAttributes( { numberOfPosts: value } ) }
							min={ 1 }
							max={ 10 }
						/>
					</PanelBody>
				</InspectorControls>
			</>
		)
	}
	
	// Block controls
	const blockControls = () => {
		return(	
			<BlockControls >
				<AlignmentToolbar
					value={ textAlign }
					onChange={ ( value ) => setAttributes( { textAlign: value } ) }
				/>
			</BlockControls>
		)
	}
	
	return (
		<>
			{ inspectorControls() }
			{ blockControls() }
			{ blockContent() }
		</>
	);
}