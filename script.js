document.addEventListener('DOMContentLoaded', function() {
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

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

    fetchDiscordMemberCount();
});

async function fetchDiscordMemberCount() {
    const memberCountElement = document.querySelector('.member-count');
    
    try {
        const response = await fetch('https://discord.com/api/v10/invites/YKPcBTJ5?with_counts=true');
        const data = await response.json();
        
        if (data.approximate_member_count) {
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

async function fetchMemberCountWithBot() {
    const memberCountElement = document.querySelector('.member-count');
    
    try {
    } catch (error) {
        memberCountElement.textContent = 'N/A';
    }
}
