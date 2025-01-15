Product Name Mapping System

Overview

The Product Name Mapping System is designed to standardize product names from different suppliers, ensuring consistent data entry and improved efficiency. 

It provides:

Manual Matching: Add mappings for product names manually.
Automatic Matching: Identify and map product names automatically using intelligent matching algorithms.
Fallback Mechanism: Ensures the system works even if the backend server is unavailable.
CRUD Operations: Seamlessly create, read, update, and delete mappings.

Features and Functionalities
1. Manual Matching
Manually input a supplier product name and map it to a standardized name.
The data is dynamically updated in the UI and saved to the backend server.
2. Automatic Matching
Intelligent matching using:
Token Matching: Splits product names into tokens (words) and compares them.
Fuzzy Matching: Uses Levenshtein distance to identify approximate matches.
Synonym Handling: Replaces common abbreviations and synonyms with standardized terms.
3. Fallback Mechanism
Uses a predefined local dictionary if the backend server is unreachable.
Ensures uninterrupted operation by loading and saving mappings locally.
4. CRUD Operations
   
Create: Add new mappings manually.

Read: Fetch mappings from the server or fallback dictionary.

Update: Modify mappings dynamically.

Delete: Remove mappings via a delete button in the UI.
Technical Details

Frontend

Languages and Libraries:

HTML: Interface structure.

CSS: Styling and layout, including flexbox for adjustments.

JavaScript: Core functionality:

Fetch API for server communication.

DOM manipulation for UI updates.

Backend

Technologies Used:

Node.js and Express: Handles API requests.

MongoDB: Stores mappings persistently.

Mongoose: ORM for database interaction.

Cases Identified and Handled

Case Sensitivity: Normalizes text to lowercase for consistent matching.

Extra Spaces: Trims leading, trailing, and multiple spaces.

Abbreviations and Synonyms: Replaces common abbreviations (e.g., sh → sheet).

Server Downtime: Falls back to a local dictionary stored in JavaScript.

Exact and Partial Matches: Handles both exact and approximate matches (e.g., "a4sheet" matches "a4 sheet").

Author

Ravikumar N K

Acharya Institute of Technology, Bengaluru

📧 nkravikumar18@gmail.com

📞 7483173215
