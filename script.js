// Simple JavaScript for Saint website

document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects for action buttons
    const actionButtons = document.querySelectorAll('.action-btn');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Add subtle animation to content blocks on page load
    const contentBlocks = document.querySelectorAll('.content-block');
    
    contentBlocks.forEach((block, index) => {
        block.style.opacity = '0';
        block.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            block.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            block.style.opacity = '1';
            block.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Fetch Discord server member count
    fetchDiscordMemberCount();
});

// Function to fetch Discord server member count
async function fetchDiscordMemberCount() {
    const memberCountElement = document.querySelector('.member-count');
    
    try {
        // Using Discord's public API to get server info
        const response = await fetch('https://discord.com/api/v10/invites/YKPcBTJ5?with_counts=true');
        const data = await response.json();
        
        if (data.approximate_member_count) {
            // Format the number with commas
            const formattedCount = data.approximate_member_count.toLocaleString();
            memberCountElement.textContent = formattedCount;
        } else {
            memberCountElement.textContent = 'N/A';
        }
    } catch (error) {
        console.log('Could not fetch member count:', error);
        memberCountElement.textContent = 'N/A';
    }
}

// Alternative method using a Discord bot (if you have one)
// You would need to set up a Discord bot and use its API
async function fetchMemberCountWithBot() {
    const memberCountElement = document.querySelector('.member-count');
    
    try {
        // This would require a Discord bot token and proper setup
        // const response = await fetch('YOUR_BOT_API_ENDPOINT');
        // const data = await response.json();
        // memberCountElement.textContent = data.memberCount;
    } catch (error) {
        memberCountElement.textContent = 'N/A';
    }
}
