import React, { useEffect } from 'react';
import clevertap from 'clevertap-web-sdk'; // Import CleverTap

function DisplayPage() {
    useEffect(() => {
    }, []);

    return (
        <div>
            <h1>Display Page</h1>
            <div id="discover_page_ct">
                {/* CleverTap content will be displayed here */}
                <p>This is the discover_page_ct div.</p>
            </div>
        </div>
    );
}

export default DisplayPage;
