// Changes made:

// This refactored code now uses a factory function to create an instance of the library
// with private variables, methods, and getter/setter methods for filters. This provides
// better encapsulation and abstraction of the library's functionality.

// Factory function to create a library instance
// bookpreview.js

// Factory function to create an instance of the book library
// bookpreview.js

// Factory function to create an instance of the book library
const createBookLibrary =
	() => {
		// Private variables and methods
		let CURRENT_GENRE =
			'none';
		let CURRENT_AUTHOR =
			'none';
		let CURRENT_TITLE =
			'none';

		const setFilters =
			(filters) => {
				CURRENT_GENRE =
					filters.genre ||
					'none';
				CURRENT_AUTHOR =
					filters.author ||
					'none';
				CURRENT_TITLE =
					filters.title ||
					'none';
			};

		const getFilters =
			() => ({
				genre:
					CURRENT_GENRE,
				author:
					CURRENT_AUTHOR,
				title:
					CURRENT_TITLE,
			});

		// Public methods
		const createPreviews =
			(
				books,
				authors,
				BOOKS_PER_PAGE,
				PAGES
			) => {
				// Your existing createPreviews logic here...
				// Remember to use the private variables and methods when needed.
			};

		const handlePreviewClick =
			(event) => {
				// Your existing handlePreviewClick logic here...
			};

		const handlePreviewToggle =
			() => {
				// Your existing handlePreviewToggle logic here...
			};

		const handleClickAversion =
			(event) => {
				// Your existing handleClickAversion logic here...
			};

		return {
			createPreviews,
			handlePreviewClick,
			handlePreviewToggle,
			handleClickAversion,
			setFilters,
			getFilters,
		};
	};

// Export an instance of the book library
export const bookLibrary =
	createBookLibrary();
