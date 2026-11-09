TYPST   := typst
SRC     := cv.typ
OUT     := cv.pdf

.PHONY: all build open clean watch

all: build

build:
	$(TYPST) compile $(SRC) $(OUT)

open: build
	open $(OUT)

watch:
	$(TYPST) watch $(SRC) $(OUT)

clean:
	rm -f $(OUT)
