
        function scrollPage() {
            const distanceFromTop = window.scrollY;
            const distanceFromBottom = document.body.scrollHeight - window.innerHeight - distanceFromTop;

            if (distanceFromTop <= distanceFromBottom) {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }
    